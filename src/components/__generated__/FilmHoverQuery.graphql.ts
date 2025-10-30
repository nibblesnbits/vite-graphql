/**
 * @generated SignedSource<<6dd63ffca74955ab45a0cf3f211fb3c9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmHoverQuery$variables = {
  id: string;
};
export type FilmHoverQuery$data = {
  readonly film: {
    readonly id: string;
    readonly title: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"Film_item">;
  } | null | undefined;
};
export type FilmHoverQuery = {
  response: FilmHoverQuery$data;
  variables: FilmHoverQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FilmHoverQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Film",
        "kind": "LinkedField",
        "name": "film",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Film_item"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FilmHoverQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Film",
        "kind": "LinkedField",
        "name": "film",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "director",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "34baeacdd7d8f95c500fb887e2a24407",
    "id": null,
    "metadata": {},
    "name": "FilmHoverQuery",
    "operationKind": "query",
    "text": "query FilmHoverQuery(\n  $id: ID!\n) {\n  film(id: $id) {\n    id\n    title\n    ...Film_item\n  }\n}\n\nfragment Film_item on Film {\n  id\n  title\n  director\n}\n"
  }
};
})();

(node as any).hash = "71397c06f7da8f9c6cfe626876c2cfe1";

export default node;
