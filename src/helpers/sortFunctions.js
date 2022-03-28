export function upvoteCompare( a, b ) {
    if ( a.upvotes > b.upvotes ){
      return -1;
    }
    if ( a.upvotes < b.upvotes ){
      return 1;
    }
    return 0;
  }

export function upvoteCompareReverse(a, b) {
    if (a.upvotes < b.upvotes){
      return -1;
    }
    if (a.upvotes > b.upvotes ){
      return 1;
    }
    return 0;
  }

export function commentsCompare(a, b) {
    if (!a.comments) {
        return 1
    }

    if (!b.comments) {
        return -1;
    }

    if (a.comments?.length < b.comments?.length) {
        return 1
    }
    if (a.comments?.length > b.comments?.length) {
        return -1;
    }
    return 0;
}

export function commentsCompareReverse(a, b) {
    if (!a.comments) {
        return -1
    }

    if (!b.comments) {
        return 1;
    }

    if (a.comments?.length < b.comments?.length) {
        return -1
    }
    if (a.comments?.length > b.comments?.length) {
        return 1;
    }
    return 0;
}