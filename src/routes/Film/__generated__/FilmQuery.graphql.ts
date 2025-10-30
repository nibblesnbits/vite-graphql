/**
 * @generated SignedSource<<d8b33c5e4f97f8657d08680df86bfe2f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmQuery$variables = {
  id: string;
};
export type FilmQuery$data = {
  readonly film: {
    readonly id: string;
    readonly title: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"Film_item">;
  } | null | undefined;
};
export type FilmQuery = {
  response: FilmQuery$data;
  variables: FilmQuery$variables;
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
    "name": "FilmQuery",
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
    "name": "FilmQuery",
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
    "cacheID": "87fa2608afe1652bb24bca3f376b9d24",
    "id": null,
    "metadata": {},
    "name": "FilmQuery",
    "operationKind": "query",
    "text": "query FilmQuery(\n  $id: ID!\n) {\n  film(id: $id) {\n    id\n    title\n    ...Film_item\n  }\n}\n\nfragment Film_item on Film {\n  id\n  title\n  director\n}\n"
  }
};
})();

(node as any).hash = "998dd5d783abc6fdf33db810a5542165";

export default node;
