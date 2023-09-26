import React from "react";


const Home = () => {
  return (
    <React.Fragment>
      <header className="header bg-dark text-light py-3">
        <div className="container">
          <h1>Employee Management System</h1>
        </div>
      </header>
      <main className="main">
        <section className="intro text-center py-5">
          <div className="container">
            <p>Welcome to our Employee Management System.Manage your employees efficiently and easily.</p>
          </div>
        </section>
        <section className="features py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="feature text-center p-4">
                  <h2>Manage Employees</h2>
                  <p>Add, update, and delete employee records with ease.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature text-center p-4">
                  <h2>Generate Reports</h2>
                  <p>Generate insightful reports and analyze employee data.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature text-center p-4">
                  <h2>User-Friendly Interface</h2>
                  <p>Intuitive and user-friendly interface for hassle-free management.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
     
    </React.Fragment>
  );
};

export default Home;
