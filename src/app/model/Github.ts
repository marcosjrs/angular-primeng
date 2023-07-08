export interface Github {
 allow_forking:               boolean;
 archive_url:                 string;
 archived:                    boolean;
 assignees_url:               string;
 blobs_url:                   string;
 branches_url:                string;
 clone_url:                   string;
 collaborators_url:           string;
 comments_url:                string;
 commits_url:                 string;
 compare_url:                 string;
 contents_url:                string;
 contributors_url:            string;
 created_at:                  Date;
 default_branch:              DefaultBranch;
 deployments_url:             string;
 description:                 null | string;
 disabled:                    boolean;
 downloads_url:               string;
 events_url:                  string;
 fork:                        boolean;
 forks:                       number;
 forks_count:                 number;
 forks_url:                   string;
 full_name:                   string;
 git_commits_url:             string;
 git_refs_url:                string;
 git_tags_url:                string;
 git_url:                     string;
 has_discussions:             boolean;
 has_downloads:               boolean;
 has_issues:                  boolean;
 has_pages:                   boolean;
 has_projects:                boolean;
 has_wiki:                    boolean;
 homepage:                    null | string;
 hooks_url:                   string;
 html_url:                    string;
 id:                          number;
 is_template:                 boolean;
 issue_comment_url:           string;
 issue_events_url:            string;
 issues_url:                  string;
 keys_url:                    string;
 labels_url:                  string;
 language:                    Language;
 languages_url:               string;
 license:                     null;
 merges_url:                  string;
 milestones_url:              string;
 mirror_url:                  null;
 name:                        string;
 node_id:                     string;
 notifications_url:           string;
 open_issues:                 number;
 open_issues_count:           number;
 owner:                       Owner;
 private:                     boolean;
 pulls_url:                   string;
 pushed_at:                   Date;
 releases_url:                string;
 size:                        number;
 ssh_url:                     string;
 stargazers_count:            number;
 stargazers_url:              string;
 statuses_url:                string;
 subscribers_url:             string;
 subscription_url:            string;
 svn_url:                     string;
 tags_url:                    string;
 teams_url:                   string;
 topics:                      any[];
 trees_url:                   string;
 updated_at:                  Date;
 url:                         string;
 visibility:                  Visibility;
 watchers:                    number;
 watchers_count:              number;
 web_commit_signoff_required: boolean;
}

export enum DefaultBranch {
 Main = "main",
 Master = "master",
}

export enum Language {
 HTML = "HTML",
 JavaScript = "JavaScript",
 ObjectiveC = "Objective-C",
 PHP = "PHP",
 TypeScript = "TypeScript",
}

export interface Owner {
 avatar_url:          string;
 events_url:          EventsURL;
 followers_url:       string;
 following_url:       FollowingURL;
 gists_url:           GistsURL;
 gravatar_id:         string;
 html_url:            string;
 id:                  number;
 login:               Login;
 node_id:             NodeID;
 organizations_url:   string;
 received_events_url: string;
 repos_url:           string;
 site_admin:          boolean;
 starred_url:         StarredURL;
 subscriptions_url:   string;
 type:                Type;
 url:                 string;
}

export enum EventsURL {
 HTTPSAPIGithubCOMUsersMarcosjrsEventsPrivacy = "https://api.github.com/users/marcosjrs/events{/privacy}",
}

export enum FollowingURL {
 HTTPSAPIGithubCOMUsersMarcosjrsFollowingOtherUser = "https://api.github.com/users/marcosjrs/following{/other_user}",
}

export enum GistsURL {
 HTTPSAPIGithubCOMUsersMarcosjrsGistsGistID = "https://api.github.com/users/marcosjrs/gists{/gist_id}",
}

export enum Login {
 Marcosjrs = "marcosjrs",
}

export enum NodeID {
 MDQ6VXNlcjQzMzk2NzA = "MDQ6VXNlcjQzMzk2NzA=",
}

export enum StarredURL {
 HTTPSAPIGithubCOMUsersMarcosjrsStarredOwnerRepo = "https://api.github.com/users/marcosjrs/starred{/owner}{/repo}",
}

export enum Type {
 User = "User",
}

export enum Visibility {
 Public = "public",
}
