import React from 'react';

export const Home = () => {
    return (
        <div className="home-container">
            <div className="titles">
                <p style={{marginTop: "250px"}}>Why take the Cambridge English First Test (FCE)?</p>
                <p style={{marginTop: "150px"}}>Exam Structure</p>
                <p style={{marginTop: "30px"}}>Reading and Use of English</p>
                <p style={{marginTop: "100px"}}>Writting</p>
                <p style={{marginTop: "60px"}}>Listening</p>
                <p style={{marginTop: "60px"}}>Speaking</p>
            </div>
            <div className="general-info">
                <h3>Welcome to our site!</h3>
                <div>
                    <p>First Certificate in English or the international FCE exam is a test that is conducted according to the Cambridge University system for candidates who are not native English speakers.</p>
                    <p>There are three types of testing:</p>
                    <ul>
                        <li> B2 First (FCE) - B2 level general exam;</li>
                        <li>B2 First for Schools (FCE for Schools) - testing, also focused on B2, but with material adapted for school;</li>
                        <li>B2 First Computer-based - computer-based exam format.</li>
                    </ul>

                   
                    <div>An FCE certificate will come in handy if you are going to study at a college or university in an English speaking country. Successfully passing the exam will confirm that you know the language at a level sufficient for learning and dealing with everyday situations. This qualification is also useful for those who plan to work abroad: the FCE certificate demonstrates your ability to communicate in a professional environment. In addition, while preparing for the Cambridge FCE exam, you will be able to improve all aspects of the language and increase your general level of knowledge so that you can communicate and understand English more fluently.</div>

           
                    <div style={{marginTop: "20px"}}>The B2 First exam aims to test all important skills: listening, reading, writing and speaking. The FCE test is divided into four parts:</div>
                   
                    <p>This section tests the ability to read and understand different types of English texts (fiction, non-fiction), as well as use a variety of vocabulary and grammar. There are 7 parts in the Reading section containing tasks of different types: multiple choice, filling in the gaps, rephrasing sentences, finding matches. The total number of questions is 52. 1 hour 15 minutes is allotted for completion.
                    writing.</p>
                 
                    <p>The written part consists of two tasks. The first is writing an essay on a given topic with the expression of one's own opinion. In the second, you need to choose one of three formats and write a letter, review or review. You have 1 hour and 20 minutes to complete all tasks.</p>
                   
                    <p>This section tests listening skills. The candidate must understand the speech of native speakers in different formats. The section consists of four parts, tasks include choosing the correct answer, filling in the gaps, finding matches. Duration - approximately 40 minutes.</p>
                   
                    <p>The oral part tests the candidate's ability to lead a discussion, correctly and appropriately use a variety of vocabulary and grammatical structures. The pronunciation and the logic of the presentation of the material are also evaluated. The speaking test is conducted in the format of a conversation between two (sometimes three) candidates with the examiner and with each other. The conversation lasts an average of 14 minutes.</p>

                </div>
            </div>
            <div className="articles-list">
                <p className="title">Grades</p>
                <p>Grade A: 180-190 - C1</p>
                <p>Grade B: 173–179 - B2</p>
                <p>Grade C  160–172 - B2</p>
                <p>Level B1 140–159 - B1</p>
            </div>
        </div>
    )
}