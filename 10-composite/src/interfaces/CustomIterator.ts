// The "Iterator" role, carried over from the Iterator pattern example. It
// isn't part of the Composite pattern itself, but each Menu uses one to
// walk its own direct children - defining a uniform traversal interface
// (hasNext/getNext) that hides how a particular composite stores its items
// (array, object, ...). Named "CustomIterator" only to avoid clashing with
// TypeScript's built-in Iterator/Iterable types, not because it does
// anything non-standard.
abstract class CustomIterator<T> {
  abstract hasNext: () => boolean;
  abstract getNext: () => T;
}

export { CustomIterator };
