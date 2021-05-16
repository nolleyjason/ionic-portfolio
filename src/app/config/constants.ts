import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    public static API_ENDPOINT: string = 'https://webhooks.mongodb-realm.com/api/client/v2.0/app/portfolio-ntwsz/service/readResume/incoming_webhook/getResume';//' https://gitconnected.com/v1/portfolio/nolleyjason';
    //public readonly API_MOCK_ENDPOINT: string = 'https://www.userdomainmock.com/'; 
    public static TitleOfSite: string = "J.Nolley Resume";
    public static Skills: Array<object> = [
        {
            "name": "Javascript",
            "level": "Advanced",
            "keywords": [
                "Languages & Frameworks"
            ],
            "rating": 4,
            "yearsOfExperience": 20
        },
        {
            "name": "JQuery",
            "level": "Advanced",
            "keywords": [
                "Languages & Frameworks"
            ],
            "rating": 4,
            "yearsOfExperience": 10
        },
        {
            "name": "C#.Net",
            "level": "Intermediate",
            "keywords": [
                "Languages & Frameworks"
            ],
            "rating": 3,
            "yearsOfExperience": 5
        },
        {
            "name": "SQL",
            "level": "Intermediate",
            "keywords": [
                "Languages & Frameworks"
            ],
            "rating": 3,
            "yearsOfExperience": 5
        },
        {
            "name": "CSS",
            "level": "Intermediate",
            "keywords": [
                "Languages & Frameworks"
            ],
            "rating": 3,
            "yearsOfExperience": 10
        },
        {
            "name": "HTML",
            "level": "Advanced",
            "keywords": [
                "Languages & Frameworks"
            ],
            "rating": 4,
            "yearsOfExperience": 20
        },
        {
            "name": "PHP",
            "level": "Intermediate",
            "keywords": [
                "Languages & Frameworks"
            ],
            "rating": 3,
            "yearsOfExperience": 5
        },
        {
            "name": "Jitterbit",
            "level": "Advanced",
            "keywords": [
                "Development Tools"
            ],
            "rating": 4,
            "yearsOfExperience": 3
        },
        {
            "name": "MongoDB Atlas",
            "level": "Intermediate",
            "keywords": [
                "Development Tools"
            ],
            "rating": 3,
            "yearsOfExperience": 1
        },
        {
            "name": "MS SQL Server",
            "level": "Intermediate",
            "keywords": [
                "Development Tools"
            ],
            "rating": 3,
            "yearsOfExperience": 5
        },
        {
            "name": "MySQL",
            "level": "Beginner",
            "keywords": [
                "Development Tools"
            ],
            "rating": 2,
            "yearsOfExperience": 5
        },
        {
            "name": "Postman",
            "level": "Beginner",
            "keywords": [
                "Development Tools"
            ],
            "rating": 2,
            "yearsOfExperience": 4
        },
        {
            "name": "AngularJS",
            "level": "Intermediate",
            "keywords": [
                "Languages & Frameworks"
            ],
            "rating": 3,
            "yearsOfExperience": 4
        },
        {
            "name": "Git/BitBucket",
            "level": "Beginner",
            "keywords": [
                "Development Tools"
            ],
            "rating": 2,
            "yearsOfExperience": 2
        },
        {
            "name": "JIRA",
            "level": "Intermediate",
            "keywords": [
                "Business & Productivity"
            ],
            "rating": 3,
            "yearsOfExperience": 3
        },
        {
            "name": "Asana",
            "level": "Intermediate",
            "keywords": [
                "Business & Productivity"
            ],
            "rating": 3,
            "yearsOfExperience": 2
        },
        {
            "name": "AWS S3",
            "level": "Beginner",
            "keywords": [
                "Development Tools"
            ],
            "rating": 2,
            "yearsOfExperience": 1
        },
        {
            "name": "VS Code",
            "level": "Intermediate",
            "keywords": [
                "Development Tools"
            ],
            "rating": 3,
            "yearsOfExperience": 4
        },
        {
            "name": "Trello",
            "level": "Intermediate",
            "keywords": [
                "Business & Productivity"
            ],
            "rating": 3,
            "yearsOfExperience": 2
        }
    ];
}