import React, { useContext, useEffect } from 'react'
import Issuecontext from '../context/Issuecontext';
import SingleIssue from './SingleIssue';
import styles from "../styles/IssueListPage.module.css"

const IssueList = () => {
    const context = useContext(Issuecontext);
    const { allissues } = context;

    useEffect(() => {
        console.log("anchor")
    }, []);

    return (
        <>
            <div className={styles.issuelistparent}>
                {allissues.map((issue) => (
                    <SingleIssue issue={issue} />
                ))}
                {/* <SingleIssue />
                <SingleIssue />
                <SingleIssue />
                <SingleIssue />
                <SingleIssue />
                <SingleIssue /> */}
            </div>

        </>
    )
}

export default IssueList