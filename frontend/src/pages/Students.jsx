import { useEffect, useState } from "react";
import api from "../api/axios";

import StudentStatistics from "../components/student/StudentStatistics";
import StudentFilters from "../components/student/StudentFilters";
import StudentTable from "../components/student/StudentTable";
import Pagination from "../components/student/Pagination";

export default function Students() {

    const [students, setStudents] = useState([]);

    const [stats, setStats] = useState(null);

    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [ordering, setOrdering] = useState("-id");

    const [page, setPage] = useState(1);

    const [next, setNext] = useState(null);

    const [previous, setPrevious] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [editingStudent, setEditingStudent] = useState(null);

    const [deleteStudent, setDeleteStudent] = useState(null);

    useEffect(() => {

        const timer = setTimeout(() => {

            loadStudents();

        }, 300);

        return () => clearTimeout(timer);

    }, [search, ordering, page]);

    const loadStudents = async () => {

        try {

            setLoading(true);

            const [studentRes, statRes] = await Promise.all([

                api.get(

                    `/students/?page=${page}&search=${search}&ordering=${ordering}`

                ),

                api.get(

                    "/students/statistics/"

                )

            ]);

            setStudents(

                studentRes.data.results

            );

            setNext(

                studentRes.data.next

            );

            setPrevious(

                studentRes.data.previous

            );

            setStats(

                statRes.data

            );

        }

        catch (err) {

            console.error(err);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading)

        return (

            <div className="text-center mt-5">

                <div className="spinner-border"/>

            </div>

        );

        // ======================
    // SAVE STUDENT
    // ======================

    const saveStudent = async (student) => {

        if (editingStudent) {

            await api.put(
                `/students/${editingStudent.id}/`,
                student
            );

        } else {

            await api.post(
                "/students/",
                student
            );

        }

        setShowModal(false);
        setEditingStudent(null);

        loadStudents();

    };

    // ======================
    // DELETE STUDENT
    // ======================

    const removeStudent = async () => {

        await api.delete(
            `/students/${deleteStudent.id}/`
        );

        setDeleteStudent(null);

        loadStudents();

    };

    // ======================
    // useEffect
    // ======================

    useEffect(() => {

        loadStudents();

    }, []);

    return (

        <div className="container py-4">

            <h2 className="mb-4">

                Students

            </h2>

            <StudentStatistics

                stats={stats}

            />

            <StudentFilters

                search={search}

                setSearch={setSearch}

                ordering={ordering}

                setOrdering={setOrdering}

            />

            
<StudentTable

    students={students}

    onEdit={(student) => {

        setEditingStudent(student);

        setShowModal(true);

    }}

    onDelete={(student) => {

        setDeleteStudent(student);

    }}

/>



            <Pagination

                page={page}

                setPage={setPage}

                next={next}

                previous={previous}

            />
<StudentModal

    show={showModal}

    student={editingStudent}

    onClose={() => {

        setShowModal(false);

        setEditingStudent(null);

    }}

    onSave={saveStudent}

/>

<DeleteModal

    show={!!deleteStudent}

    onClose={() => setDeleteStudent(null)}

    onDelete={removeStudent}

/>



        </div>

    );

}