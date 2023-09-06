const bodyEl = document.getElementById("body")

const templates = [
    {
            title: "CAT 1 Expedited",
            mailingList: ["ORRDCSWesternRegionReleases@acf.hhs.gov"],
            ccList: ["FtblissEIS_discharge@acf.hhs.gov",
                "CMLeads.SAR@rf1hosted.com", 
                "arianna.fimbres@chenegaglobal.com", 
                "horacio.necoechea@chenegaglobal.com",
                "kenneth.sweeney@chenegaglobal.com",
                "anghid8482@rf1hosted.com",
                "erika.holguin@rf1hosted.com", 
                "claudia.balcorta-chavez@acf.hhs.gov"],
            subject: "(Virtual) FOR EXPEDITED SR/PRS CAT 1 Review A.B.C.D. X-XXX Ft. Bliss - ICF",
            body: `Greetings, %0D
                %0DCase is being submitted under ORR’s March 23, 2021 Field Guidance #10 – Expedited Release for eligible category 1 cases.
                %0DStraight Release/Post Release Services to the proposed Sponsor who is the Relationship and resides in City, State.
                %0DAttached Document with the encrypted standard password.
                %0DPlease let me know if you have any questions regarding this case.
                %0D
                %0DThank you,`
            
    },
    {

            title: "CAT 1, Non-Expedited",
            mailingList: [
                "ORRCC_RemoteOps2@gdit.com"
            ],
            ccList: [
                "FtblissEIS_discharge@acf.hhs.gov", 
                "CMLeads.SAR@rf1hosted.com", 
                "arianna.fimbres@chenegaglobal.com",
                "horacio.necoechea@chenegaglobal.com", 
                "kenneth.sweeney@chenegaglobal.com; ",
                "anghid8482@rf1hosted.com",
                "erika.holguin@rf1hosted.com",
                "claudia.balcorta-chavez@acf.hhs.gov",
            ],
            subject: "(Virtual) SR/PRS CAT 1 Non-Expedited Review A.B.C.D. X-XXX Ft. Bliss - ICF",
            body: `Greetings,%0D
                %0D
                %0DCM is recommending a Straight Release/Post Release Services to the proposed Sponsor who is the RELATIONSHIP and resides in City, State.
                %0DPlease note: This is a non-expedited CAT 1 case.
                %0DAttached Document with the encrypted standard password.
                %0DPlease let me know if you have any questions regarding this case.
                %0D
                %0DThank you,
                `
    },
    {

            title: "CAT 2A",
            mailingList: [
                "ORRCC_RemoteOps2@gdit.com"
            ],
            ccList: [
                "FtblissEIS_discharge@acf.hhs.gov",
                "CMLeads.SAR@rf1hosted.com",
                "arianna.fimbres@chenegaglobal.com",
                "kenneth.sweeney@chenegaglobal.com",
                "horacio.necoechea@chenegaglobal.com",
                "anghid8482@rf1hosted.com",
                "erika.holguin@rf1hosted.com",
                "claudia.balcorta-chavez@acf.hhs.gov",
            ],
            subject: "(Virtual) SR or PRS CAT 2A Review A.B.C.D X-XXX Ft. Bliss - ICF",
            body: `Greetings,%0D
                %0DThis case is being submitted under new ORR guidance effective 03/31/2021 Field Guidance #11, Temporary Waivers of Background Check Requirements for Category 2 Adult Household Members and Adult Caregivers.
                %0DCM is recommending a Straight Release or Post Release Services to the proposed Sponsor who is the RELATIONSHIP and resides in City, State.
                %0DAttached Document with the encrypted standard password.
                %0DPlease let me know if you have any questions regarding this case.
                %0D
                %0DThank you`,
        },

    {

            title: "CAT 2B",
            mailingList: [
                "ORRCC_RemoteOps2@gdit.com"
            ],
            ccList: [
                "FtblissEIS_discharge@acf.hhs.gov",
                "CMLeads.SAR@rf1hosted.com",
                "arianna.fimbres@chenegaglobal.com",
                "kenneth.sweeney@chenegaglobal.com",
                "horacio.necoechea@chenegaglobal.com",
                "anghid8482@rf1hosted.com",
                "erika.holguin@rf1hosted.com",
                "claudia.balcorta-chavez@acf.hhs.gov",

            ],
            subject: "(Virtual) SR or PRS CAT 2B Review A.B.C.D X-XXX Ft. Bliss - ICF",
            body: `Greetings,%0D
                %0DThis case is being submitted under new ORR guidance effective 03/31/2021 Field Guidance #11, Temporary Waivers of Background Check Requirements for Category 2 Adult Household Members and Adult Caregivers.
                %0DCM is recommending a Straight Release or Post Release Services to the proposed Sponsor who is the RELATIONSHIP and resides in City, State.
                %0DAttached Document with the encrypted standard password.
                %0DPlease let me know if you have any questions regarding this case.
                %0D
                %0DThank you,`
    },
    {

            title: "CAT 3's Distant Relative",
            mailingList: [
                "ORRCC_RemoteOps2@gdit.com"
            ],
            ccList: [
                "FtblissEIS_discharge@acf.hhs.gov",
                "CMLeads.SAR@rf1hosted.com",
                "arianna.fimbres@chenegaglobal.com",
                "kenneth.sweeney@chenegaglobal.com",
                "horacio.necoechea@chenegaglobal.com",
                "anghid8482@rf1hosted.com",
                "erika.holguin@rf1hosted.com",
                "claudia.balcorta-chavez@acf.hhs.gov",
            ],
            subject: "(Virtual) SR/PRS CAT 3 (Distant Relative) Review A.B.C.D X-XXX Ft. Bliss - ICF",
            body: `Greetings,%0D
                %0DRelease with Post Release Services to the proposed Sponsor who is a DISTANT RELATIONSHIP and resides in City, State.
                %0DThis is a CAT 3 which required fingerprint results.
                %0DAttached document with the encrypted standard password.
                %0DPlease let me know if you have questions regarding this case.
                %0D
                %0DThank you, 
                `,
    },
    {
            title: "CAT 3 Unrelated",
            mailingList: [
                "ORRCC_RemoteOps2@gdit.com"
            ],
            ccList: [
                "FtblissEIS_discharge@acf.hhs.gov",
                "CMLeads.SAR@rf1hosted.com",
                "arianna.fimbres@chenegaglobal.com",
                "kenneth.sweeney@chenegaglobal.com",
                "horacio.necoechea@chenegaglobal.com",
                "anghid8482@rf1hosted.com",
                "erika.holguin@rf1hosted.com",
                "claudia.balcorta-chavez@acf.hhs.gov",
            ],
            subject: "(Virtual) PRS CAT 3 (Unrelated) Review A.B.C.D X-XXX Ft. Bliss - ICF",
            body: `Greetings,%0D
                %0DRelease with Post Release Services to the proposed Sponsor who is an unrelated sponsor and resides in City, State.
                %0DThis is a CAT 3 which required fingerprint results.
                %0DAttached document with the encrypted standard password.
                %0DPlease let me know if you have questions regarding this case.
                %0D
                %0DThank you, 
                `,
    },
    {
        title: "Expedited Age Out Submittion: CAT 1",
        mailingList: [
            "ORRDCSWesternRegionReleases@acf.hhs.gov"
        ],
        ccList: [
            "FtblissEIS_discharge@acf.hhs.gov",
            "CMLeads.SAR@rf1hosted.com",
            "arianna.fimbres@chenegaglobal.com",
            "kenneth.sweeney@chenegaglobal.com",
            "horacio.necoechea@chenegaglobal.com",
            "anghid8482@rf1hosted.com",
            "erika.holguin@rf1hosted.com",
            "claudia.balcorta-chavez@acf.hhs.gov",
            "karlem8708@rf1hosted.com", 
            "micsan1963@rf1hosted.com"
        ],
        subject: "(Virtual) **EXPEDITED AGE OUT** SR/PRS Review: CAT 1 A.B.C.D. X-XXX Ft. Bliss - ICF AGE OUT: 00-00-0000",
        body: `Greetings, %0D
        %0DCase is being submitted under ORR’s March 23, 2021 Field Guidance #10 – Expedited Release for eligible category 1 cases.
        %0DStraight Release/Post Release Services to the proposed Sponsor who is the Relationship and resides in City, State
        %0DUC AGES OUT 00/00/0000
        %0DAttached Document with the encrypted standard password.
        %0DPlease let me know if you have any questions regarding this case.
        %0D
        %0DThank you,`,
}
]

const greeting = document.createElement("h1")
const subgreeting = document.createElement("h5")
subgreeting.textContent = "just kidding, i love you."
greeting.textContent = "HEIDI, YOU OWE ME!!!!!"

bodyEl.append(greeting, subgreeting)

function addAnchors(array) {

    array.forEach((item, idx) => {
       
       const newAnchor = document.createElement("a")
       bodyEl.append(newAnchor)
       newAnchor.id = `category-${idx}`
       newAnchor.textContent = item.title
       newAnchor.href = `mailto: ${item.mailingList}, ?cc=${item.ccList}, &subject=${item.subject}&body=${item.body}`
   })
}

addAnchors(templates)