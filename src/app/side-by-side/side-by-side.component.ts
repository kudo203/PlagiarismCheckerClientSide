import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Clone, CloneTechniques, Match} from '../models/matches.model';
import {GetMatchService} from '../get-match.service';

@Component({
  selector: 'app-side-by-side',
  templateUrl: './side-by-side.component.html',
  styleUrls: ['./side-by-side.component.css']
})
export class SideBySideComponent implements OnInit {
  id: number;
  match: Match;
  f1_content_model: ContentModel[];
  f2_content_model: ContentModel[];
  constructor(private route: ActivatedRoute, private getMatchService: GetMatchService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.match = this.getMatchService.getMatches(this.id);
    this.GenerateContentModels(this.match.cloneTechniques[0].clones, this.match.f1_content, this.match.f2_content);
  }

  GenerateContentModels(clones: Clone[], f1_content: string[], f2_content: string[]) {
    const f1_line_color_mapping = {};
    const f2_line_color_mapping = {};
    const f1_first_lines = {};
    const f2_first_lines = {};
    this.Populate_Values(f1_line_color_mapping, f1_content.length);
    this.Populate_Values(f2_line_color_mapping, f2_content.length);
    let clone_id = 1;
    for (const clone of clones) {
      const color_string = this.GenerateRandomColor();
      for (let i = clone.file1Stub.startLine; i <= clone.file1Stub.endLine; i++) {
        if (i === clone.file1Stub.startLine) {
          f1_first_lines[i] = [clone_id, clone.similarity * 100];
        }
        f1_line_color_mapping[i] = color_string;
      }
      for (let i = clone.file2Stub.startLine; i <= clone.file2Stub.endLine; i++) {
        if (i === clone.file2Stub.startLine) {
          f2_first_lines[i] = [clone_id, clone.similarity * 100];
        }
        f2_line_color_mapping[i] = color_string;
      }
      clone_id += 1;
    }
    this.f1_content_model = [];
    for (let i = 0; i < f1_content.length; i++) {
      const model = new ContentModel(f1_content[i], f1_line_color_mapping[i + 1]);
      if  (i + 1 in f1_first_lines) {
        model.clone_id = f1_first_lines[i + 1][0];
        model.similarity = f1_first_lines[i + 1][1];
      }
      this.f1_content_model.push(model);
    }
    this.f2_content_model = [];
    for (let i = 0; i < f2_content.length; i++) {
      const model = new ContentModel(f2_content[i], f2_line_color_mapping[i + 1]);
      if  (i + 1 in f2_first_lines) {
        model.clone_id = f2_first_lines[i + 1][0];
        model.similarity = f2_first_lines[i + 1][1];
      }
      this.f2_content_model.push(model);
    }
  }

  GenerateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    color += letters[Math.floor(Math.random() * 8) + 8];
    color += letters[Math.floor(Math.random() * 8) + 8];
    color += letters[Math.floor(Math.random() * 8) + 8];
    color += letters[Math.floor(Math.random() * 8) + 8];
    color += 'ff';
    return color;
  }

  Populate_Values(mapping, count) {
    let i: number;
    for (i = 1; i <= count; i++) {
      mapping[i] = '#f8f8ff';
    }
  }
}

export class ContentModel {
  line: string;
  color: string;
  similarity = -1;
  clone_id = -1;
  constructor(line: string, color: string) {
    this.line = line;
    this.color = color;
  }
}
