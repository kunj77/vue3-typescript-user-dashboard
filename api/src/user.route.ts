import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.route('/personal/user').get((req: Request, res: Response, next: NextFunction) => {
    // Simulate fetching user data from a database or any data source
    const userData = {
        "data": {
          "id": 1,
          "name": "John Smith",
          "email": "john.smith@example.com",
          "profile_picture_url": "https://placehold.co/600x400.png",
          "email_verified_at": "2022-01-01 15:38:33.0 Asia/Singapore (+08:00)",
          "identification_number": "S9****567A",
          "current_organisation": {
            "id": 2,
            "name": "Sample Bank ABC",
            "logo_url": "https://placehold.co/600x400.png",
            "is_personal": true
          }
        }
      };
      res.json(userData);
});

router.route('/managed/user').get((req: Request, res: Response, next: NextFunction) => {
    // Simulate fetching user data from a database or any data source
    const userData = {
        "data": {
          "id": 1,
          "name": "John Smith",
          "email": "john.smith@example.com",
          "profile_picture_url": "https://placehold.co/600x400.png",
          "email_verified_at": "2022-01-01 15:38:33.0 Asia/Singapore (+08:00)",
          "identification_number": "S9****567A",
          "current_organisation": {
            "id": 2,
            "name": "Sample Bank ABC",
            "logo_url": "https://placehold.co/600x400.png",
            "is_personal": false
          }
        }
      };
      res.json(userData);
});

router.route('/documents').get((req: Request, res: Response, next: NextFunction) => {
    // Simulate fetching user data from a database or any data source
    const documents = {
        "data": [
          {
            "id": 1,
            "status": "issued",
            "document_name": "Degree in Information Systems",
            "issuer_name": "ISSUER NAME",
            "issuer_logo_url": "https://placehold.co/600x400.png",
            "recipient_name": "John Frusciante",
            "received_on": "2022-01-12T17:58:25.000000Z",
            "expire_at": "2023-01-12T00:00:00.000000Z",
            "created_at": "2022-01-12T10:45:10.000000Z",
            "updated_at": "2022-01-12T17:58:25.000000Z",
            "archived_at": null,
            "deleted_at": null
          },
          {
            "id": 2,
            "status": "issued",
            "document_name": "Graduate Certificate in Legal Tech",
            "issuer_name": "ISSUER NAME",
            "issuer_logo_url": "https://placehold.co/600x400.png",
            "recipient_name": "John Frusciante",
            "received_on": "2022-02-02T17:58:25.000000Z",
            "expire_at": null,
            "created_at": "2022-01-12T10:45:10.000000Z",
            "updated_at": "2022-01-12T17:58:25.000000Z",
            "archived_at": null,
            "deleted_at": null
          },
          {
            "id": 3,
            "status": "issued",
            "document_name": "Fintech: Foundations And Applications of Financial Technology",
            "issuer_name": "ISSUER NAME",
            "issuer_logo_url": "https://placehold.co/600x400.png",
            "recipient_name": "John Frusciante",
            "received_on": "2022-04-10T17:58:25.000000Z",
            "expire_at": "2023-01-12T00:00:00.000000Z",
            "created_at": "2022-01-12T10:45:10.000000Z",
            "updated_at": "2022-01-12T17:58:25.000000Z",
            "archived_at": null,
            "deleted_at": null
          },
          {
            "id": 4,
            "status": "issued",
            "document_name": "Machine Learning Engineering for Production",
            "issuer_name": "ISSUER NAME",
            "issuer_logo_url": "https://placehold.co/600x400.png",
            "recipient_name": "John Frusciante",
            "received_on": "2022-05-29T17:58:25.000000Z",
            "expire_at": "2023-01-12T00:00:00.000000Z",
            "created_at": "2022-01-12T10:45:10.000000Z",
            "updated_at": "2022-01-12T17:58:25.000000Z",
            "archived_at": null,
            "deleted_at": null
          },
          {
            "id": 5,
            "status": "issued",
            "document_name": "SWAB Test Result",
            "issuer_name": "ISSUER NAME",
            "issuer_logo_url": "https://placehold.co/600x400.png",
            "recipient_name": "John Frusciante",
            "received_on": "2022-01-12T17:58:25.000000Z",
            "expire_at": "2023-06-12T00:00:00.000000Z",
            "created_at": "2022-01-12T10:45:10.000000Z",
            "updated_at": "2022-01-12T17:58:25.000000Z",
            "archived_at": null,
            "deleted_at": null
          },
        ],
        "links": {
          "first": "http://localhost/document-module/identities/1/documents?page=1",
          "last": "http://localhost/document-module/identities/1/documents?page=1",
          "prev": null,
          "next": null
        },
        "meta": {
          "current_page": 1,
          "from": 1,
          "last_page": 1,
          "links": [
            {
              "url": null,
              "label": "pagination.previous",
              "active": false
            },
            {
              "url": "http://localhost/document-module/identities/1/documents?page=1",
              "label": "1",
              "active": true
            },
            {
              "url": null,
              "label": "pagination.next",
              "active": false
            }
          ],
          "path": "http://localhost/document-module/identities/1/documents",
          "per_page": 10,
          "to": 10,
          "total": 5
        }
      }
      res.json(documents);
});

router.route('/career-goal').get((req: Request, res: Response, next: NextFunction) => {
  // Simulate fetching career goal from a database or any data source
  const careerGoal = {
    "data": [
      {
        "id": 1,
        "name": "Account Manager",
        "description": "Manage maintain and grow the sales and relationships with a specific customer or set of accounts. This includes in-depth customer engagement relationship-building and provision of quality solutions and service to address customers' needs efficiently and generate revenue",
        "category": "Sales and Marketing",
        "type": "technical",
        "progress": 45
      }
    ]
  }
  res.json(careerGoal);
});


export default router;

