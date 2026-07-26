// The "Iterator" role. Defines a uniform traversal interface (hasNext/getNext)
// that hides how a particular collection is actually stored - array, object,
// linked list, whatever. Named "CustomIterator" only to avoid clashing with
// TypeScript's built-in Iterator/Iterable types, not because it does anything
// non-standard.
abstract class CustomIterator<T> {
  abstract hasNext: () => boolean;
  abstract getNext: () => T;
}

export { CustomIterator };
