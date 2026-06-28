import React from "react";

export default function StudentStatistics({ stats }) {

    if (!stats) return null;

    return (

        <div className="row mb-4">

            <div className="col-md-3 mb-3">

                <div className="card shadow-sm">

                    <div className="card-body">

                        <h6>Total Students</h6>

                        <h2>{stats.total_students}</h2>

                    </div>

                </div>

            </div>

            <div className="col-md-3 mb-3">

                <div className="card shadow-sm">

                    <div className="card-body">

                        <h6>Expected Income</h6>

                        <h2>৳ {stats.expected_income}</h2>

                    </div>

                </div>

            </div>

            <div className="col-md-3 mb-3">

                <div className="card shadow-sm">

                    <div className="card-body">

                        <h6>Classes</h6>

                        <h2>{stats.class_count}</h2>

                    </div>

                </div>

            </div>

            <div className="col-md-3 mb-3">

                <div className="card shadow-sm">

                    <div className="card-body">

                        <h6>Subjects</h6>

                        <h2>{stats.subject_count}</h2>

                    </div>

                </div>

            </div>

        </div>

    );

}