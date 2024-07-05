import Link from "next/link";

export default function about() {
  return (
    <>
      <h1 className="text-center mt-4">Our services</h1>
      <div className="row mt-4 px-4">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="img/1.1.png" className="card-img-top" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Financial Service</h5>
              <p className="card-text">
                Explore the essentials of financial services with our comprehensive course. Learn key concepts in banking, investment, and insurance to manage your finances effectively and make informed decisions.
              </p>
              <Link href="/service" className="btn btn-primary">See more</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="img/1.2.png" className="card-img-top" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Master your finances</h5>
              <p className="card-text">
                Take control of your financial future with our practical course. Learn essential strategies to budget effectively, invest wisely, and achieve financial independence.
              </p>
              <Link href="/service" className="btn btn-primary">See more</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="img/1.3.png" className="card-img-top" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">4 Steps to create a budgets</h5>
              <p className="card-text">
                Discover a straightforward approach to budgeting with our step-by-step course. Learn how to set financial goals, track expenses, allocate funds, and achieve financial stability.
              </p>
              <Link href="/service" className="btn btn-primary">See more</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}