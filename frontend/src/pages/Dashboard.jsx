import { useEffect, useState } from "react";
import api from "../api/axios";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCards";
import QuickAnalytics from "../components/dashboard/QuickAnalytics";

import IncomeChart from "../components/dashboard/IncomeChart";
import PaymentChart from "../components/dashboard/PaymentChart";
import StudentsClassChart from "../components/dashboard/StudentsClassChart";
import SubjectChart from "../components/dashboard/SubjectChart";
import MonthlyCollectionChart from "../components/dashboard/MonthlyCollectionChart";

import RecentStudents from "../components/dashboard/RecentStudents";
import RecentPayments from "../components/dashboard/RecentPayments";

export default function Dashboard() {

    const [dashboard, setDashboard] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const res = await api.get("/dashboard/");

            setDashboard(res.data);

        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div
                className="d-flex justify-content-center align-items-center"
                style={{
                    height: "100vh"
                }}
            >

                Loading Dashboard...

            </div>

        );

    }

    const classChartData = {

        labels: dashboard.class_distribution.map(

            c => c.class_name

        ),

        datasets: [

            {

                label: "Students",

                data: dashboard.class_distribution.map(

                    c => c.total

                ),

            },

        ],

    };

    const subjectData = {

        labels: dashboard.subject_distribution.map(

            s => s.subject

        ),

        datasets: [

            {

                label: "Students",

                data: dashboard.subject_distribution.map(

                    s => s.total

                ),

            },

        ],

    };

    const monthlyData = {

        labels: dashboard.monthly_income.map(

            m => `${m.month}/${m.year}`

        ),

        datasets: [

            {

                label: "Collection",

                data: dashboard.monthly_income.map(

                    m => m.total

                ),

            },

        ],

    };

    const pieData = {

        labels: [

            "Collected",

            "Due"

        ],

        datasets: [

            {

                data: [

                    dashboard.collected_income,

                    dashboard.due_amount,

                ],

            },

        ],

    };

    return (

        <div className="container-fluid py-4">

            <DashboardHeader />

            <StatsCards

                totalStudents={dashboard.total_students}

                expectedIncome={dashboard.expected_income}

                collectedIncome={dashboard.collected_income}

                dueAmount={dashboard.due_amount}

            />

            <QuickAnalytics

                totalStudents={dashboard.total_students}

                presentCount={dashboard.present}

                expectedIncome={dashboard.expected_income}

                collectedIncome={dashboard.collected_income}

                dueAmount={dashboard.due_amount}

            />

            <div className="row">

                <div className="col-lg-8 mb-4">

                    <IncomeChart

                        lineData={monthlyData}

                    />

                </div>

                <div className="col-lg-4 mb-4">

                    <PaymentChart

                        pieData={pieData}

                    />

                </div>

            </div>

            <div className="row">

                <div className="col-lg-6 mb-4">

                    <StudentsClassChart

                        classChartData={classChartData}

                    />

                </div>

                <div className="col-lg-6 mb-4">

                    <SubjectChart

                        subjectData={subjectData}

                    />

                </div>

            </div>

            <MonthlyCollectionChart

                monthlyData={monthlyData}

            />

            <div className="row mt-4">

                <div className="col-lg-6">

                    <RecentStudents

                        students={dashboard.recent_students}

                    />

                </div>

                <div className="col-lg-6">

                    <RecentPayments

                        recentPayments={dashboard.recent_payments}

                    />

                </div>

            </div>

        </div>

    );

}