export default function AttendanceFilters({

    search,

    setSearch,

}) {

    return (

        <div className="card mb-4 shadow-sm">

            <div className="card-body">

                <input

                    className="form-control"

                    placeholder="Search student..."

                    value={search}

                    onChange={(e)=>

                        setSearch(e.target.value)

                    }

                />

            </div>

        </div>

    );

}
