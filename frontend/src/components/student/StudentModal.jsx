import { useEffect, useState } from "react";

export default function StudentModal({

    show,

    onClose,

    onSave,

    student,

}) {

    const [form, setForm] = useState({

        name: "",

        phone: "",

        class_name: "",

        subject: "",

        monthly_fee: "",

        address: "",

    });

    useEffect(() => {

        if (student) {

            setForm(student);

        } else {

            setForm({

                name: "",

                phone: "",

                class_name: "",

                subject: "",

                monthly_fee: "",

                address: "",

            });

        }

    }, [student]);

    if (!show) return null;

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value,

        });

    };

    return (

        <div className="modal d-block">

            <div className="modal-dialog">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5>

                            {student ? "Edit Student" : "Add Student"}

                        </h5>

                    </div>

                    <div className="modal-body">

                        <input
                            className="form-control mb-2"
                            name="name"
                            placeholder="Name"
                            value={form.name}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-2"
                            name="phone"
                            placeholder="Phone"
                            value={form.phone}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-2"
                            name="class_name"
                            placeholder="Class"
                            value={form.class_name}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-2"
                            name="subject"
                            placeholder="Subject"
                            value={form.subject}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-2"
                            name="monthly_fee"
                            placeholder="Monthly Fee"
                            value={form.monthly_fee}
                            onChange={handleChange}
                        />

                        <textarea
                            className="form-control"
                            name="address"
                            placeholder="Address"
                            value={form.address}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="modal-footer">

                        <button
                            className="btn btn-secondary"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            className="btn btn-primary"
                            onClick={() => onSave(form)}
                        >
                            Save
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}