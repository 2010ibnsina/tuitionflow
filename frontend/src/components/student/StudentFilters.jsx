import React from "react";

export default function StudentFilters({

    search,

    setSearch,

    ordering,

    setOrdering,

}) {

    return (

        <div className="card mb-4">

            <div className="card-body">

                <div className="row">

                    <div className="col-md-8">

                        <input

                            className="form-control"

                            placeholder="Search student..."

                            value={search}

                            onChange={(e)=>

                                setSearch(e.target.value)

                            }

                        />

                    </div>

                    <div className="col-md-4">

                        <select

                            className="form-select"

                            value={ordering}

                            onChange={(e)=>

                                setOrdering(e.target.value)

                            }

                        >

                            <option value="-id">

                                Newest

                            </option>

                            <option value="name">

                                Name A-Z

                            </option>

                            <option value="-name">

                                Name Z-A

                            </option>

                            <option value="monthly_fee">

                                Fee Low-High

                            </option>

                            <option value="-monthly_fee">

                                Fee High-Low

                            </option>

                        </select>

                    </div>

                </div>

            </div>

        </div>

    );

}