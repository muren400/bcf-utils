export const bcf_2_1 = {
    "Markup": {
        "children": [
            {
                "name": "Header",
                "type": "Header"
            },
            {
                "name": "Topic",
                "type": "Topic"
            },
            {
                "name": "Comment",
                "type": "Comment",
                "list": true
            },
            {
                "name": "Viewpoints",
                "type": "Viewpoints",
                "list": true
            },
        ],
    },
    "Header": {
        "children": [
            {
                "name": "File",
                "type": "File",
                "list": true
            }
        ]
    },
    "File": {
        "children": [
            {
                "name": "Filename",
                "type": "string"
            },
            {
                "name": "Date",
                "type": "string"
            },
            {
                "name": "Reference",
                "type": "string"
            }
        ],
        "attributes": [
            "IfcProject",
            "IfcSpatialStructureElement",
            "isExternal"
        ]
    },
    "Topic": {
        "children": [
            {
                "name": "ReferenceLink",
                "type": "string",
                "list": true
            },
            {
                "name": "Title",
                "type": "string"
            },
            {
                "name": "Priority",
                "type": "string"
            },
            {
                "name": "Index",
                "type": "string"
            },
            {
                "name": "Labels",
                "type": "string",
                "list": true
            },
            {
                "name": "CreationDate",
                "type": "string"
            },
            {
                "name": "CreationAuthor",
                "type": "string"
            },
            {
                "name": "ModifiedDate",
                "type": "string"
            },
            {
                "name": "ModifiedAuthor",
                "type": "string"
            },
            {
                "name": "CreationAuthor",
                "type": "string"
            },
            {
                "name": "DueDate",
                "type": "string"
            },
            {
                "name": "AssignedTo",
                "type": "string"
            },
            {
                "name": "Description",
                "type": "string"
            },
            {
                "name": "Stage",
                "type": "string"
            },
            {
                "name": "BimSnippet",
                "type": "BimSnippet"
            },
            {
                "name": "DocumentReference",
                "type": "DocumentReference",
                "list": true
            },
            {
                "name": "RelatedTopic",
                "type": "RelatedTopic",
                "list": true
            }
        ],
        "attributes": [
            "Guid",
            "TopicType",
            "TopicStatus"
        ]
    },
    "BimSnippet": {
        "children": [
            {
                "name": "Reference",
                "type": "string"
            },
            {
                "name": "ReferenceSchema",
                "type": "string"
            }
        ],
        "attributes": [
            "SnippetType",
            "IsExternal"
        ]
    },
    "DocumentReference": {
        "children": [
            {
                "name": "ReferencedDocument",
                "type": "string"
            },
            {
                "name": "Description",
                "type": "string"
            }
        ],
        "attributes": [
            "Guid",
            "IsExternal"
        ]
    },
    "RelatedTopic": {
        "attributes": [
            "GUID"
        ]
    },
    "Comment": {
        "children": [
            {
                "name": "Date",
                "type": "string"
            },
            {
                "name": "Author",
                "type": "string"
            },
            {
                "name": "Comment",
                "type": "string"
            },
            {
                "name": "Viewpoint",
                "type": "string"
            },
            {
                "name": "ModifiedDate",
                "type": "string"
            },
            {
                "name": "ModifiedAuthor",
                "type": "string"
            }
        ]
    },
    "Viewpoints": {
        "children": [
            {
                "name": "Viewpoint",
                "type": "string"
            },
            {
                "name": "Snapshot",
                "type": "string"
            },
            {
                "name": "Index",
                "type": "string"
            }
        ]
    },
}
