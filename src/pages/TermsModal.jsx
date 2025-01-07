import React from 'react';

const TermsModal = ({ isOpen, onClose, onAccept }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Terms & Conditions</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          <p className="text-red-500 text-sm lg:text-[16px]">
            This cinema is now CASHLESS. Pay for your Booking, Food & beverages seamlessly using 
            your digital payment methods like Credit/Debit card/ UPI platform. It's fast, secure & 
            seamless. Enjoy the show.
          </p>
          
          <ol className="text-sm lg:text-[16px] list-decimal pl-5 space-y-2 text-gray-600">
            <li>Entry is allowed only for valid ticket holders.</li>
            <li>Guests aged under 18 will not be allowed in "A" rated movies.</li>
            <li>Children above the age of 3 years require tickets for "U" or "U/A" rated movies.</li>
            <li>In case a ticket is lost or misplaced, a duplicate ticket cannot be issued.</li>
            <li>Tickets once purchased cannot be cancelled, exchanged or refunded.</li>
            <li>Guest Agrees to be contacted by INOX Management for the purpose of seeking feedback for service improvement.</li>
            <li>Decision(s) taken by INOX shall be final and binding. Rights of admission reserved.</li>
            <li>Outside food and beverages are not allowed inside the cinema premises.</li>
            <li>Patrons under the influence of alcohol or drugs will not be allowed inside the Cinema Premises.</li>
            <li>Ticket prices and movie schedules are subject to change without any prior notification.</li>
          </ol>
        </div>

        {/* Footer */}
        <div className="p-4 border-t flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onAccept}
            className="flex-1 py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-purple-900"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;