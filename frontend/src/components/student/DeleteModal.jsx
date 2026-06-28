export default function DeleteModal({

    show,

    onClose,

    onDelete,

}) {

    if (!show) return null;

    return (

        <div className="modal d-block">

            <div className="modal-dialog">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5>

                            Delete Student

                        </h5>

                    </div>

                    <div className="modal-body">

                        Are you sure?

                    </div>

                    <div className="modal-footer">

                        <button

                            className="btn btn-secondary"

                            onClick={onClose}

                        >

                            Cancel

                        </button>

                        <button

                            className="btn btn-danger"

                            onClick={onDelete}

                        >

                            Delete

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}