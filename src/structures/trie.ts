type Node = {
  [key: string]: Trie | undefined;
};

/**
 * @author https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript/blob/master/src/data-structures/trees/trie.js
 * @tutorial https://www.geeksforgeeks.org/advantages-trie-data-structure/
 * @tutorial https://practice.geeksforgeeks.org/problems/difference-between-bst-and-tries
 */
export default class Trie {
  val: string | undefined;
  children: Node;
  isWord: boolean;

  constructor(val?: string) {
    this.val = val;
    this.children = {};
    this.isWord = false;
  }

  /**
   * Insert word into trie and mark last element as such.
   */
  insert(word: string) {
    let curr: Trie = this;

    for (const char of word) {
      curr.children[char] = curr.children[char] || new Trie(char);
      curr = curr.children[char]!;
    }

    curr.isWord = true;
  }

  /**
   * Return true if found the word to be removed, otherwise false.
   * @param word - The word to remove
   */
  remove(word: string) {
    let curr: Trie = this;
    const stack = [curr];

    // find word and stack path
    for (const char of word) {
      const child = curr.children[char];
      if (!child) return false;
      curr = child;
      stack.push(curr);
    }

    let child = stack.pop();
    if (child) child.isWord = false;

    // remove non words without children
    while (stack.length) {
      const parent = stack.pop();
      if (child?.val && !child.isWord && Object.keys(child.children).length === 0)
        delete parent?.children[child.val];

      child = parent;
    }

    return true;
  }

  /**
   * Return last node that matches word or prefix, or false if not found.
   */
  searchNode(word: string) {
    let curr: Trie = this;

    for (const char of word) {
      const child = curr.children[char];
      if (!child) return false;
      curr = child;
    }

    return curr;
  }

  /**
   * Search for complete word (by default) or partial if flag is set.
   * @param word - Word to search.
   * @param partial - Whether or not match partial matches.
   */
  search(word: string, partial?: boolean) {
    const curr = this.searchNode(word);
    if (!curr) return false;

    return partial ? true : curr.isWord;
  }

  /**
   * Return true if any word on the trie starts with the given prefix
   * @param prefix - Partial word to search.
   */
  startsWith(prefix: string) {
    return this.search(prefix, true);
  }

  /**
   * Returns all the words from the current `node`.
   * Uses backtracking.
   * @param prefix - The prefix to append to each word.
   * @param node - Current node to start backtracking.
   */
  *getAllWords(prefix = "", node: Trie = this): IterableIterator<string> {
    if (!node) return;

    if (node.isWord) yield prefix;

    for (const char of Object.keys(node.children))
      yield* this.getAllWords(`${prefix}${char}`, node.children[char]);
  }

  /**
   * Return a list of words matching the prefix
   * @param prefix - The prefix to match.
   */
  *autocomplete(prefix = ""): IterableIterator<string> {
    const curr = this.searchNode(prefix);
    if (curr) yield* this.getAllWords(prefix, curr);
  }
}
