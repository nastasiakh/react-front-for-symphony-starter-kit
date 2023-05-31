import React, {useEffect} from "react";
import Layout from "../../../components/admin/Layout";
import Header from "../../../components/admin/Header";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getPages} from "../../../actions/page";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPencil, faTrash} from "@fortawesome/free-solid-svg-icons";


function PageList() {
    library.add(faTrash, faPencil);

    const pages = useSelector(state => state.pages)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPages())
    }, [])
    console.log("pages", pages)

    return (
        <Layout>
            <Header/>
            <div className="d-flex col-10 flex-column container position-relative">
                <div className="">
                    <h2 className="text-center mt-5 mb-3">Page list</h2>
                </div>
                <div className="mb-4">
                    <div className="d-flex col-2">
                        <Link className="app-button" to={'/pages/create'}>Add</Link>
                    </div>
                </div>
                <div className="d-flex">
                    <table className="d-flex col-12 u-full-width flex-column">
                        <thead className="w-100">
                        <tr className="d-flex justify-content-between p-2">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Url</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(pages) && pages.length ? pages.map(page => (
                                <tr className="d-flex justify-content-between p-2 align-items-center mb-1">
                                    <td>{page.id}</td>
                                    <td>{page.name}</td>
                                    <td>{page.url}</td>
                                    <td>{page.status ? 'Enable' : 'Disable'}</td>
                                    <td className="d-flex justify-content-between ">
                                        <Link to={`/pages/${page.id}/edit`} className="app-button action-button caution">
                                            <FontAwesomeIcon icon={faPencil}/>
                                        </Link>
                                        <button className="app-button action-button">
                                            <FontAwesomeIcon icon={faTrash}/>
                                        </button>
                                    </td>
                                </tr>
                            )) : <h3 className="d-flex justify-content-center heading mt-5" style={{color: '#d0d0d0'}}>
                                List is empty</h3>}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}

export default PageList;