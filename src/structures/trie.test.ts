import Trie from "./trie";

describe("Trie", () => {
  let trie: Trie;

  beforeEach(() => {
    trie = new Trie();
  });

  describe("construtor", () => {
    beforeEach(() => {
      trie = new Trie("aaa");
    });

    it("sets default value", () => {
      expect(trie.val).toEqual("aaa");
    });

    it("initializes children as empty map", () => {
      expect(trie.children).toEqual({});
    });

    it("should not be a word by default", () => {
      expect(trie.isWord).toEqual(false);
    });
  });

  describe("insert", () => {
    it("inserts a word", () => {
      trie.insert("ab");
      expect(trie.children?.a).toBeDefined();
      expect(trie.children?.a?.children.b).toBeDefined();
      expect(trie.children?.a?.isWord).toEqual(false);
      expect(trie.children?.a?.children?.b?.isWord).toEqual(true);
    });

    it("inserts multiple words in the same root", () => {
      trie.insert("a");
      trie.insert("ab");
      expect(trie.children?.a?.isWord).toEqual(true);
      expect(trie.children?.a?.children?.b?.isWord).toEqual(true);
    });
  });

  describe("search & startsWith", () => {
    beforeEach(() => {
      trie.insert("dog");
      trie.insert("dogs");
      trie.insert("door");
    });

    it("searches for words", () => {
      expect(trie.search("dog")).toEqual(true);
    });

    it("does not match incomplete words by default", () => {
      expect(trie.search("do")).toEqual(false);
    });

    it("matches partial words if partial is set", () => {
      expect(trie.search("do", true)).toEqual(true);
      expect(trie.startsWith("do")).toEqual(true);
    });

    it("matches full words if partial is set", () => {
      expect(trie.search("dogs", true)).toEqual(true);
      expect(trie.startsWith("dogs")).toEqual(true);
    });

    it("does not match non existing words", () => {
      expect(trie.search("doors")).toEqual(false);
    });

    it("does not match non existing words with partials", () => {
      expect(trie.search("doors", true)).toEqual(false);
      expect(trie.startsWith("doors")).toEqual(false);
    });
  });

  describe("when multiple words are inserted", () => {
    beforeEach(() => {
      trie.insert("dog");
      trie.insert("dogs");
      trie.insert("door");
      trie.insert("day");
      trie.insert("cat");
    });

    describe("getAllWords", () => {
      it("gets all words", () => {
        const words = Array.from(trie.getAllWords());
        expect(words.length).toEqual(5);
        expect(words).toEqual(["dog", "dogs", "door", "day", "cat"]);
      });

      it("applies prefix", () => {
        const words = Array.from(trie.getAllWords("Adrian's "));
        expect(words.length).toEqual(5);
        expect(words).toEqual([
          "Adrian's dog",
          "Adrian's dogs",
          "Adrian's door",
          "Adrian's day",
          "Adrian's cat"
        ]);
      });
    });

    describe("autocomplete", () => {
      it("returns all words if prefix is not provided", () => {
        const words = Array.from(trie.autocomplete());
        expect(words.length).toBe(5);
        expect(words).toEqual(["dog", "dogs", "door", "day", "cat"]);
      });

      it("returns words matching the provided prefix", () => {
        const words = Array.from(trie.autocomplete("do"));
        expect(words.length).toBe(3);
        expect(words).toEqual(["dog", "dogs", "door"]);
      });

      it("handles non-existing words prefixes", () => {
        const words = Array.from(trie.autocomplete("co"));
        expect(words.length).toBe(0);
        expect(words).toEqual([]);
      });
    });

    describe("remove", () => {
      it("removes a word", () => {
        trie = new Trie();
        trie.insert("a");
        expect(trie.remove("a")).toEqual(true);
        expect(Array.from(trie.getAllWords())).toEqual([]);
      });

      it("removes a word and keep others", () => {
        trie = new Trie();
        trie.insert("a");
        trie.insert("ab");
        expect(trie.remove("a")).toEqual(true);
        expect(Array.from(trie.getAllWords())).toEqual(["ab"]);
      });

      it("removes surrounding word", () => {
        trie = new Trie();
        trie.insert("a");
        trie.insert("ab");
        expect(trie.remove("ab")).toEqual(true);
        expect(Array.from(trie.getAllWords())).toEqual(["a"]);
      });

      it("should return false when word is not found", () => {
        expect(trie.remove("not there")).toBe(false);
      });

      it("should remove words in between and still match", () => {
        expect(trie.remove("dog")).toBe(true);
        expect(trie.search("dogs")).toBe(true);
        expect(trie.startsWith("dog")).toBe(true);
        expect(Array.from(trie.getAllWords())).toEqual(["dogs", "door", "day", "cat"]);
      });

      it("should remove word and no longer match partials", () => {
        expect(trie.remove("dogs")).toBe(true);
        expect(trie.search("dogs")).toBe(false);
        expect(trie.search("dog")).toBe(true);
        expect(trie.startsWith("dog")).toBe(true);
        expect(Array.from(trie.getAllWords())).toEqual(["dog", "door", "day", "cat"]);
      });
    });
  });
});
