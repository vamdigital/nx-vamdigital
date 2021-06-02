export enum ActionKind {
  INCREMENT = 'likes/increment',
}

export type Action = {
  type: ActionKind
}

export const LikesAction: Action = {
  type: ActionKind.INCREMENT,
}
