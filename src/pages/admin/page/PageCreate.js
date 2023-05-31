import React, {useState} from 'react'
import Layout from "../../../components/admin/Layout";
import Header from "../../../components/admin/Header";
import {useDispatch, useSelector} from "react-redux";
import {createPage} from "../../../actions/page";
import Input from "../../../components/base_elements/Input";
import Textarea from "../../../components/base_elements/Textarea";
import Select from "../../../components/base_elements/Select";
import {Link} from "react-router-dom";

function PageCreate() {

    const [page, setPage] = useState({
        name: '',
        content: '',
        url: '',
        metaTitle: '',
        metaDescription: '',
        status: true,
    })

    const errors = useSelector(state => state.errors)

    const handlePage = (e, field) => {
        console.log(e.target.value)
        setPage({...page, [field]: e.target.value})
    }

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(createPage(page))
    }

    return (
        <Layout>
            <Header/>
            <div className="container">
                <div className="pt-5 pb-5">
                    <h2 className="heading text-center mt-5 mb-3">Add page</h2>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-top">
                    <div className="d-flex col-8 flex-column">
                        <div>
                            <Input label="Title" placeholder="Enter title" value={page.name} name="title"
                                   changeAction={(e) => handlePage(e,'name')} style={{width: '70%'}}/>
                            {errors && errors.name ?
                                <div style={{color: 'red'}}>{errors.name}</div>
                                : ''}
                        </div>

                        <div>
                            <Textarea label="Content" placeholder="Enter content" value={page.content} name="content"
                                   changeAction={(e) => handlePage(e,'content')} style={{width: '70%'}}/>
                            {errors && errors.content ?
                                <div style={{color: 'red'}}>{errors.content}</div>
                                : ''}
                        </div>

                        <div>
                            <Textarea label="Meta title" placeholder="Enter meta title" value={page.metaTitle} name="metaTitle"
                                      changeAction={(e) => handlePage(e,'metaTitle')} style={{width: '70%'}}/>
                            {errors && errors.metaTitle ?
                                <div style={{color: 'red'}}>{errors.metaTitle}</div>
                                : ''}
                        </div>

                        <div>
                            <Textarea label="Meta description" placeholder="Enter meta description" value={page.metaDescription} name="metaDescription"
                                      changeAction={(e) => handlePage(e,'metaDescription')} style={{width: '70%'}}/>
                            {errors && errors.metaDescription ?
                                <div style={{color: 'red'}}>{errors.metaDescription}</div>
                                : ''}
                        </div>

                        <div>
                            <Input label="Url" placeholder="Enter url" value={page.url} name="url"
                                   changeAction={(e) => handlePage(e,'url')} style={{width: '70%'}}/>
                            {errors && errors.url ?
                                <div style={{color: 'red'}}>{errors.url}</div>
                                : ''}
                        </div>
                    </div>
                    <div className="d-flex col-4 flex-column">
                        <div className="d-flex mb-4">
                            <Select label="Status" changeAction={(e) => handlePage(e, 'status')}
                                    value={page.status} optionsArray={['Disable', 'Enable']}
                            />
                            {errors && errors.status ?
                                <div style={{color: 'red'}}>{errors.status}</div>
                                : ''}
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex col-5">
                                <button className="app-button" onClick={handleClick}>Save</button>
                            </div>
                            <div className="d-flex col-5">
                                <Link to={'/'} className="app-button secondary">Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default PageCreate;