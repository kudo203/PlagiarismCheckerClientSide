export interface Stub {
  startLine: number;
  endLine: number;
  span: number;
}

export interface Clone {
  file1Stub: Stub;
  file2Stub: Stub;
  similarity: number;
}

export interface CloneTechniques {
  clones: Clone[];
  type: string;
}

export interface Match {
  f1_name: string;
  f2_name: string;
  cloneTechniques: CloneTechniques[];
  f1_content: string[];
  f2_content: string[];
  similarity: number;

}
