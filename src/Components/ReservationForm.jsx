import { useState, useEffect, useCallback } from "react";
import "../assets/reservationform.css";

const OPENING_HOURS = {
  regular: { open: "10:00", close: "22:00" },
  sunday: { open: "11:30", close: "21:00" },
};

function getTodayStr() {
  return new Date().toISOString().split("T")[0];
}

function getDayOfWeek(dateString) {
  return new Date(dateString + "T00:00:00").getDay();
}

function isTimeInPast(timeStr, dateStr) {
  if (dateStr !== getTodayStr()) return false;
  const now = new Date();
  const [hours, minutes] = timeStr.split(":").map(Number);
  const selected = new Date();
  selected.setHours(hours, minutes, 0, 0);
  return selected < now;
}

function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const ops = ["+", "-", "*"];
  const op = ops[Math.floor(Math.random() * ops.length)];
  let question = "";
  let answer = 0;
  if (op === "+") { question = `${num1} + ${num2} = ?`; answer = num1 + num2; }
  else if (op === "-") { question = `${num1} - ${num2} = ?`; answer = num1 - num2; }
  else { question = `${num1} × ${num2} = ?`; answer = num1 * num2; }
  return { question, answer };
}


export default function ReservationForm() {
  const todayStr = getTodayStr();

  // Step state
  const [step, setStep] = useState(1);

  // Step 1 fields
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [members, setMembers] = useState("");
  const [purpose, setPurpose] = useState("");

  // Step 2 fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha);

  // Time constraints
  const [timeMin, setTimeMin] = useState("");
  const [timeMax, setTimeMax] = useState("");

  // Transition classes
  const [step1Class, setStep1Class] = useState("form-step");
  const [step2Class, setStep2Class] = useState("form-step step-hidden");

  const getTimeConstraints = useCallback((selectedDate) => {
    if (!selectedDate) return { min: "", max: "" };
    const isSunday = getDayOfWeek(selectedDate) === 0;
    const hours = isSunday ? OPENING_HOURS.sunday : OPENING_HOURS.regular;

    if (selectedDate === getTodayStr()) {
      const now = new Date();
      const mins = now.getMinutes();
      let curHour = now.getHours();
      let curMin = mins <= 30 ? 30 : 60;
      if (curMin === 60) { curHour++; curMin = 0; }

      const [openHour, openMin] = hours.open.split(":").map(Number);
      const [closeHour, closeMin] = hours.close.split(":").map(Number);

      let min;
      if (curHour < openHour || (curHour === openHour && curMin < openMin)) {
        min = hours.open;
      } else if (curHour > closeHour || (curHour === closeHour && curMin >= closeMin)) {
        min = hours.close;
      } else {
        min = `${String(curHour).padStart(2, "0")}:${String(curMin).padStart(2, "0")}`;
      }
      return { min, max: hours.close };
    }
    return { min: hours.open, max: hours.close };
  }, []);

  useEffect(() => {
    if (!date) { setTimeMin(""); setTimeMax(""); return; }
    const { min, max } = getTimeConstraints(date);
    setTimeMin(min);
    setTimeMax(max);
    if (time && (time < min || time > max || isTimeInPast(time, date))) {
      setTime("");
    }
  }, [date, getTimeConstraints]);

  const handleDateChange = (e) => {
    const val = e.target.value;
    if (val < todayStr) {
      alert("Please select today or a future date.");
      setDate(todayStr);
    } else {
      setDate(val);
    }
  };

  const handleTimeChange = (e) => {
    const val = e.target.value;
    if (!date) { alert("Please select a date first."); setTime(""); return; }
    if (isTimeInPast(val, date)) { alert("Please select a future time."); setTime(""); return; }
    const isSunday = getDayOfWeek(date) === 0;
    const hours = isSunday ? OPENING_HOURS.sunday : OPENING_HOURS.regular;
    if (val < hours.open || val > hours.close) {
      alert(`Please select a time between ${hours.open} and ${hours.close}.`);
      setTime(""); return;
    }
    setTime(val);
  };

  const goToStep2 = (e) => {
    e.preventDefault();
    setStep1Class("form-step step-exit");
    setTimeout(() => {
      setStep(2);
      setStep1Class("form-step");
      setStep2Class("form-step step-enter");
      setTimeout(() => setStep2Class("form-step"), 10);
    }, 300);
  };

  const backToStep1 = () => {
    setStep2Class("form-step step-exit-right");
    setTimeout(() => {
      setStep(1);
      setStep2Class("form-step");
      setStep1Class("form-step step-enter");
      setTimeout(() => setStep1Class("form-step"), 10);
    }, 300);
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();
    const userAnswer = parseInt(captchaAnswer, 10);
    if (isNaN(userAnswer) || userAnswer !== captcha.answer) {
      alert("Please solve the math problem correctly to verify you are not a robot.");
      setCaptcha(generateCaptcha());
      setCaptchaAnswer("");
      return;
    }
    e.target.submit();
  };

  return (
    <div className="reservation-container">
      {/* Form Container */}
      <div className="form-container">
        <div className="form-content">
          {/* Step Indicator */}
          <div className="step-indicator">
            <div className={`step ${step === 1 ? "active" : "completed"}`} id="step1-indicator">
              {step > 1 ? <i className="fas fa-check" /> : "1"}
            </div>
            <div className="step-line" />
            <div className="progress-line" style={{ width: step === 2 ? "100%" : "0%" }} />
            <div className={`step ${step === 2 ? "active" : ""}`} id="step2-indicator">2</div>
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className={step1Class} id="step1">
              <h2><i className="far fa-calendar-alt" /> Reservation</h2>
              <form onSubmit={goToStep2}>
                <div className="form-group">
                  <label htmlFor="date"><i className="far fa-calendar" /> Date</label>
                  <i className="fas fa-calendar-day input-icon" />
                  <input type="date" id="date" name="date" min={todayStr} value={date} onChange={handleDateChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="time"><i className="far fa-clock" /> Time</label>
                  <i className="fas fa-clock input-icon" />
                  <input type="time" id="time" name="time" min={timeMin} max={timeMax} value={time} onChange={handleTimeChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="members"><i className="fas fa-user-friends" /> Guests</label>
                  <i className="fas fa-users input-icon" />
                  <input type="number" id="members" name="members" min="1" max="20" value={members} onChange={e => setMembers(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label htmlFor="purpose"><i className="fas fa-info-circle" /> Purpose</label>
                  <i className="fas fa-tag input-icon" />
                  <select id="purpose" name="purpose" value={purpose} onChange={e => setPurpose(e.target.value)} required>
                    <option value="" disabled>Select</option>
                    <option value="Regular">Regular</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Celebration">Celebration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="button-group">
                  <button type="submit" className="btn-primary">
                    Next <i className="fas fa-arrow-right" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className={step2Class} id="step2">
              <h2><i className="far fa-user" /> Contact Info</h2>
              <form action="../services/process_reservation.php" method="POST" onSubmit={handleStep2Submit}>
                <input type="hidden" name="date" value={date} />
                <input type="hidden" name="time" value={time} />
                <input type="hidden" name="members" value={members} />
                <input type="hidden" name="purpose" value={purpose} />

                <div className="form-group">
                  <label htmlFor="name"><i className="far fa-user" /> Full Name</label>
                  <i className="fas fa-user input-icon" />
                  <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email"><i className="far fa-envelope" /> Email</label>
                  <i className="fas fa-envelope input-icon" />
                  <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone"><i className="fas fa-mobile-alt" /> Phone</label>
                  <div className="prefix">
                    <span>+420</span>
                    <i className="fas fa-phone phone-icon" />
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{9}" placeholder="775150050" value={phone} onChange={e => setPhone(e.target.value)} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message"><i className="far fa-comment-dots" /> Special Requests</label>
                  <textarea id="message" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                </div>

                {/* CAPTCHA */}
                <div className="form-group">
                  <label><i className="fas fa-shield-alt" /> Verification</label>
                  <div className="captcha-container">
                    <div className="captcha-question">{captcha.question}</div>
                    <div className="captcha-input">
                      <input type="text" id="captchaAnswer" name="captchaAnswer" placeholder="Your answer" value={captchaAnswer} onChange={e => setCaptchaAnswer(e.target.value)} required />
                    </div>
                    <button type="button" className="captcha-refresh" title="Refresh CAPTCHA" onClick={() => { setCaptcha(generateCaptcha()); setCaptchaAnswer(""); }}>
                      <i className="fas fa-sync-alt" />
                    </button>
                  </div>
                </div>

                <div className="button-group">
                  <button type="button" className="btn-secondary" onClick={backToStep1}>
                    <i className="fas fa-arrow-left" /> Back
                  </button>
                  <button type="submit" className="btn-primary">
                    <i className="fas fa-check" /> Confirm
                  </button>
                </div>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}