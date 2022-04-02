import React, { useContext, useEffect, useState } from 'react'
import IssueList from '../../components/IssueList'
import Navbar from '../../components/navbar'
import styleshome from "../../styles/Home.module.css"
import styles from "../../styles/IssueListPage.module.css"
import plusicon from "../../public/assets/Plusicon.svg"
import Image from 'next/image'
import Issuecontext from '../../context/Issuecontext'
import { getallissues } from '../../service/IssueAPi'

const IssueListPage = () => {
    const context = useContext(Issuecontext);
    const { allissues, setallissues, } = context;

    const fetchallissues = async () => {
        const alldata = await getallissues();
        console.log(alldata.data);
        setallissues(alldata.data)
    }

    useEffect(() => {
        fetchallissues()
        console.log(allissues);
    }, []);

    return (
        <>
            <div className={styleshome.container}><Navbar /></div>

            <div className={styles.parentcontainer}>
                <h3 className={styles.welcome} >Hello user welcome to issues page !! </h3>
                <h3 className={styles.welcome}>You can select to solve an issue or make an issue of yours. </h3>

                <div>
                    <div className={styles.abovehrdiv}>
                        <div className={styles.heresissuediv}><p>Here are some issues you can solve </p></div>
                        <button type="button" className={`btn btn-primary ${styles.issuebutton}`}>
                            <span>Create new issue</span>
                            <Image src={plusicon} alt='plusicon' width={35}
                                height={35} className={styles.issuebuttonimage} />
                        </button>
                    </div>
                    <hr className={styles.issuehr} />
                </div>
                <IssueList />
            </div>
        </>
    )
}

export default IssueListPage