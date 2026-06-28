export default function Pagination({

    previous,

    next,

    page,

    setPage,

}) {

    return (

        <div className="d-flex justify-content-center mt-4">

            <button

                className="btn btn-secondary me-2"

                disabled={!previous}

                onClick={()=>

                    setPage(page-1)

                }

            >

                Previous

            </button>

            <button

                className="btn btn-primary"

                disabled={!next}

                onClick={()=>

                    setPage(page+1)

                }

            >

                Next

            </button>

        </div>

    );

}