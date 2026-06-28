function RecentPayments({ recentPayments }) {
  return (
    <div
      className="card shadow-lg border-0 rounded-4 h-100"
      style={{
        background: "#131c31",
        color: "white",
      }}
    >
      <div className="card-body">

        <h4 className="mb-4">
          💳 Recent Payments
        </h4>

        <div className="table-responsive">

          <table className="table table-dark table-hover align-middle">

            <thead>

              <tr>

                <th>Student</th>

                <th>Amount</th>

                <th>Date</th>

              </tr>

            </thead>

            <tbody>

              {recentPayments.length > 0 ? (

                recentPayments.map((payment) => (

                  <tr key={payment.id}>

                    <td>

                      <span className="fw-bold">
                        {payment.student_name}
                      </span>

                    </td>

                    <td>

                      <span className="badge bg-success fs-6">

                        ৳{payment.amount}

                      </span>

                    </td>

                    <td>{payment.payment_date}</td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="3"
                    className="text-center text-secondary"
                  >
                    No payment history found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default RecentPayments;