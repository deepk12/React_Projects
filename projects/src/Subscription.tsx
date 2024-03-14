
// import { useState } from 'react';
// import './Subscription.css'; // Import CSS file for styling

// const NewsletterSubscription = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://api-dev.bitdelta.com/api/v1/public/news-subscription', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage(data.message);
//       } else {
//         setMessage(data.error || 'Subscription failed');
//       }
//     } catch (error) {
//       console.error('Error subscribing:', error);
//       setMessage('Subscription failed');
//     }
//   };

//   const handleClearMessage = () => {
//     setMessage('');
//   };

//   return (
    
//     <div className="newsletter-container">
//       <div className="background"></div>
//       <div className="content">
//         <h1>Sign Up For Email</h1>
//         <h3>Signup up to receive BitDelta emails and get first dibs on new arrivals, sales, exclusive  content, event and more !</h3>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Email:
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           </label>

//           <button type="submit">Subscribe</button>
//         </form>
//         <p>{message}</p>
//         <p style={{ textDecoration: 'underline' }}>No Thanks</p>
//         <p>By entering your email address, you agree to receive BitDelta offers, promotion, other commercial messages.  You can view our Privacy Policy here and you may unsubscribe at any time</p>
//         {message && (
//           <button className="cut-button" onClick={handleClearMessage}>
//             ✕ {/* Cross symbol (X) */}
            
//           </button>
          
//         )}
//       </div>
//     </div>
    
//   );
// };

// export default NewsletterSubscription;



import { useState } from 'react';
import './Subscription.css'; // Import CSS file for styling

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api-dev.bitdelta.com/api/v1/public/news-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.error || 'Subscription failed');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setMessage('Subscription failed');
    }
  };

  const handleClearMessage = () => {
    setMessage('');
  };

  return (
    <div className="newsletter-container">
      <div className="background"></div>
      <div className="content">
        <h1>Sign Up For Email</h1>
        <h3>Signup up to receive BitDelta emails and get first dibs on new arrivals, sales, exclusive  content, event and more !</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ fontSize: '1.2rem' }} />
          </label>
          <button type="submit" style={{ fontSize: '1.2rem' }}>Subscribe</button>
        </form>
        <p>{message}</p>
        <p style={{ textDecoration: 'underline' }}>No Thanks</p>
        <p>By entering your email address, you agree to receive BitDelta offers, promotion, other commercial messages.  You can view our Privacy Policy here and you may unsubscribe at any time</p>
        {message && (
          <button className="cut-button" onClick={handleClearMessage}>
            ✕ {/* Cross symbol (X) */}
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsletterSubscription;
