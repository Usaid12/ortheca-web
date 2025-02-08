import React from 'react'
import Layout from '../../../components/layout/Layout'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

const CreatePrescription = () => {
    return (
        <Layout>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='title-wrapper'>
                        <h4>Create Prescription</h4>
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='widget-content'>
                        <form action="">
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <label htmlFor="">Prescription Title</label>
                                    <input type="text" placeholder='Prescription' />
                                </div>
                                <div className='col-lg-4'>
                                    <label htmlFor="">Patients</label>
                                    <select name="" id="">
                                        <option value="">Ahmed</option>
                                        <option value="">Fahad</option>
                                        <option value="">John</option>
                                    </select>
                                </div>
                                <div className='col-lg-4'>
                                    <label htmlFor="">Status</label>
                                    <select name="" id="">
                                        <option value="">Active</option>
                                        <option value="">In Active</option>
                                    </select>
                                </div>
                                <div className='col-lg-12'>
                                    <label htmlFor="">Prescription  </label>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data="<p>Hello from CKEditor 5!</p><h2>Try the inspector below</h2><ul><li>Check the Model</li><li>See the View</li><li>Check available commands</li></ul>"
                                        // onReady={(editor) => {
                                        //     console.log('CKEditor React Component is ready to use!', editor);
                                        //     CKEditorInspector.attach(editor);
                                        // }}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            console.log({ event, editor, data });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <button type='button' className='theme-btn btn btn-primary ms-auto mt-4'>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </Layout >
    )
}

export default CreatePrescription