/**
 * @generated SignedSource<<e87fb667824fae277d336cd7ae3ad144>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Film_item$data = {
  readonly director: string | null | undefined;
  readonly id: string;
  readonly title: string | null | undefined;
  readonly " $fragmentType": "Film_item";
};
export type Film_item$key = {
  readonly " $data"?: Film_item$data;
  readonly " $fragmentSpreads": FragmentRefs<"Film_item">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Film_item",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "director",
      "storageKey": null
    }
  ],
  "type": "Film",
  "abstractKey": null
};

(node as any).hash = "241ab62db4e851cce74b3dcd9ee8160e";

export default node;
