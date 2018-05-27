export interface Stub {
  startLine: number;
  endLine: number;
  span: number;
}

export interface Match {
  f1_name: string;
  f2_name: string;
  f1_content: string[];
  f2_content: string[];
  similarity: number;
  clones: {
    type: string;
    clones: {
      file1Stub: Stub;
      file2Stub: Stub;
    }
  };
}
