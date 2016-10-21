--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: account_user; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE account_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    created timestamp with time zone NOT NULL,
    modified timestamp with time zone NOT NULL,
    email character varying(254) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(30) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL
);


ALTER TABLE account_user OWNER TO fifth_ed_spells;

--
-- Name: account_user_groups; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE account_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE account_user_groups OWNER TO fifth_ed_spells;

--
-- Name: account_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE account_user_groups_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE account_user_groups_id_seq OWNER TO fifth_ed_spells;

--
-- Name: account_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE account_user_groups_id_seq OWNED BY account_user_groups.id;


--
-- Name: account_user_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE account_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE account_user_id_seq OWNER TO fifth_ed_spells;

--
-- Name: account_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE account_user_id_seq OWNED BY account_user.id;


--
-- Name: account_user_user_permissions; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE account_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE account_user_user_permissions OWNER TO fifth_ed_spells;

--
-- Name: account_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE account_user_user_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE account_user_user_permissions_id_seq OWNER TO fifth_ed_spells;

--
-- Name: account_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE account_user_user_permissions_id_seq OWNED BY account_user_user_permissions.id;


--
-- Name: app_armor; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE app_armor (
    item_ptr_id integer NOT NULL,
    armor_value integer NOT NULL,
    armor_class character varying(30) NOT NULL,
    stealth_disadvantage boolean NOT NULL,
    strength_requirement integer,
    has_dex_modifier boolean NOT NULL,
    weight integer NOT NULL
);


ALTER TABLE app_armor OWNER TO fifth_ed_spells;

--
-- Name: app_baserace; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE app_baserace (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    ability_scores integer[] NOT NULL,
    has_darkvision boolean NOT NULL,
    armor character varying(50)[] NOT NULL,
    weapons character varying(50)[] NOT NULL,
    languages character varying(50)[] NOT NULL,
    skills character varying(50)[] NOT NULL,
    speed integer NOT NULL
);


ALTER TABLE app_baserace OWNER TO fifth_ed_spells;

--
-- Name: app_baserace_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE app_baserace_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE app_baserace_id_seq OWNER TO fifth_ed_spells;

--
-- Name: app_baserace_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE app_baserace_id_seq OWNED BY app_baserace.id;


--
-- Name: app_item; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE app_item (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    cost numeric(8,2) NOT NULL
);


ALTER TABLE app_item OWNER TO fifth_ed_spells;

--
-- Name: app_item_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE app_item_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE app_item_id_seq OWNER TO fifth_ed_spells;

--
-- Name: app_item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE app_item_id_seq OWNED BY app_item.id;


--
-- Name: app_parentcharacterclass; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE app_parentcharacterclass (
    id integer NOT NULL,
    name character varying(500) NOT NULL,
    skills character varying(50)[] NOT NULL,
    skill_choices integer NOT NULL,
    armor character varying(50)[] NOT NULL,
    weapons character varying(50)[] NOT NULL,
    languages character varying(50)[] NOT NULL,
    hp_die integer NOT NULL,
    saving_throws character varying(3)[] NOT NULL
);


ALTER TABLE app_parentcharacterclass OWNER TO fifth_ed_spells;

--
-- Name: app_parentcharacterclass_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE app_parentcharacterclass_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE app_parentcharacterclass_id_seq OWNER TO fifth_ed_spells;

--
-- Name: app_parentcharacterclass_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE app_parentcharacterclass_id_seq OWNED BY app_parentcharacterclass.id;


--
-- Name: app_parentrace; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE app_parentrace (
    baserace_ptr_id integer NOT NULL
);


ALTER TABLE app_parentrace OWNER TO fifth_ed_spells;

--
-- Name: app_player; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE app_player (
    id integer NOT NULL,
    created timestamp with time zone NOT NULL,
    modified timestamp with time zone NOT NULL,
    character_name character varying(300) NOT NULL,
    player_id integer NOT NULL
);


ALTER TABLE app_player OWNER TO fifth_ed_spells;

--
-- Name: app_player_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE app_player_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE app_player_id_seq OWNER TO fifth_ed_spells;

--
-- Name: app_player_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE app_player_id_seq OWNED BY app_player.id;


--
-- Name: app_racialtrait; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE app_racialtrait (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    "desc" text NOT NULL,
    trait_type character varying(30)[] NOT NULL,
    trait_value character varying(30) NOT NULL,
    race_id integer NOT NULL
);


ALTER TABLE app_racialtrait OWNER TO fifth_ed_spells;

--
-- Name: app_racialtrait_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE app_racialtrait_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE app_racialtrait_id_seq OWNER TO fifth_ed_spells;

--
-- Name: app_racialtrait_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE app_racialtrait_id_seq OWNED BY app_racialtrait.id;


--
-- Name: app_skill; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE app_skill (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    ability character varying(50) NOT NULL,
    "desc" text NOT NULL
);


ALTER TABLE app_skill OWNER TO fifth_ed_spells;

--
-- Name: app_skill_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE app_skill_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE app_skill_id_seq OWNER TO fifth_ed_spells;

--
-- Name: app_skill_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE app_skill_id_seq OWNED BY app_skill.id;


--
-- Name: app_spell; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE app_spell (
    id integer NOT NULL,
    created timestamp with time zone NOT NULL,
    modified timestamp with time zone NOT NULL,
    name character varying(255) NOT NULL,
    "desc" text NOT NULL,
    requires_concentration boolean NOT NULL,
    casting_time character varying(255) NOT NULL,
    components character varying(10)[] NOT NULL,
    components_desc character varying(300),
    spell_range character varying(255) NOT NULL,
    spell_shape character varying(30),
    level smallint NOT NULL,
    duration character varying(255) NOT NULL,
    school character varying(50) NOT NULL
);


ALTER TABLE app_spell OWNER TO fifth_ed_spells;

--
-- Name: app_spell_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE app_spell_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE app_spell_id_seq OWNER TO fifth_ed_spells;

--
-- Name: app_spell_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE app_spell_id_seq OWNED BY app_spell.id;


--
-- Name: app_spellproperty; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE app_spellproperty (
    id integer NOT NULL,
    subdomain character varying(50),
    spell_id integer NOT NULL
);


ALTER TABLE app_spellproperty OWNER TO fifth_ed_spells;

--
-- Name: app_spellproperty_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE app_spellproperty_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE app_spellproperty_id_seq OWNER TO fifth_ed_spells;

--
-- Name: app_spellproperty_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE app_spellproperty_id_seq OWNED BY app_spellproperty.id;


--
-- Name: app_subcharacterclass; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE app_subcharacterclass (
    id integer NOT NULL,
    name character varying(500) NOT NULL,
    skills character varying(50)[] NOT NULL,
    skill_choices integer NOT NULL,
    armor character varying(50)[] NOT NULL,
    weapons character varying(50)[] NOT NULL,
    languages character varying(50)[] NOT NULL,
    hp_die integer NOT NULL,
    saving_throws character varying(3)[] NOT NULL,
    parent_class_id integer
);


ALTER TABLE app_subcharacterclass OWNER TO fifth_ed_spells;

--
-- Name: app_subcharacterclass_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE app_subcharacterclass_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE app_subcharacterclass_id_seq OWNER TO fifth_ed_spells;

--
-- Name: app_subcharacterclass_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE app_subcharacterclass_id_seq OWNED BY app_subcharacterclass.id;


--
-- Name: app_subrace; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE app_subrace (
    baserace_ptr_id integer NOT NULL,
    parent_id integer NOT NULL
);


ALTER TABLE app_subrace OWNER TO fifth_ed_spells;

--
-- Name: app_trait; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE app_trait (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    "desc" text NOT NULL,
    item_property_id integer
);


ALTER TABLE app_trait OWNER TO fifth_ed_spells;

--
-- Name: app_trait_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE app_trait_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE app_trait_id_seq OWNER TO fifth_ed_spells;

--
-- Name: app_trait_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE app_trait_id_seq OWNED BY app_trait.id;


--
-- Name: app_traitproperty; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE app_traitproperty (
    id integer NOT NULL,
    item_id integer NOT NULL,
    trait_id integer NOT NULL
);


ALTER TABLE app_traitproperty OWNER TO fifth_ed_spells;

--
-- Name: app_traitproperty_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE app_traitproperty_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE app_traitproperty_id_seq OWNER TO fifth_ed_spells;

--
-- Name: app_traitproperty_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE app_traitproperty_id_seq OWNED BY app_traitproperty.id;


--
-- Name: app_weapon; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE app_weapon (
    item_ptr_id integer NOT NULL,
    damage integer NOT NULL,
    dice_count integer NOT NULL,
    short_range integer,
    long_range integer,
    versatile_dmg integer,
    versatile_dice integer,
    damage_type character varying(30) NOT NULL,
    special text
);


ALTER TABLE app_weapon OWNER TO fifth_ed_spells;

--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE auth_group (
    id integer NOT NULL,
    name character varying(80) NOT NULL
);


ALTER TABLE auth_group OWNER TO fifth_ed_spells;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE auth_group_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth_group_id_seq OWNER TO fifth_ed_spells;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE auth_group_id_seq OWNED BY auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE auth_group_permissions OWNER TO fifth_ed_spells;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE auth_group_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth_group_permissions_id_seq OWNER TO fifth_ed_spells;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE auth_group_permissions_id_seq OWNED BY auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE auth_permission OWNER TO fifth_ed_spells;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE auth_permission_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth_permission_id_seq OWNER TO fifth_ed_spells;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE auth_permission_id_seq OWNED BY auth_permission.id;


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE django_admin_log OWNER TO fifth_ed_spells;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE django_admin_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE django_admin_log_id_seq OWNER TO fifth_ed_spells;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE django_admin_log_id_seq OWNED BY django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE django_content_type OWNER TO fifth_ed_spells;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE django_content_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE django_content_type_id_seq OWNER TO fifth_ed_spells;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE django_content_type_id_seq OWNED BY django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE django_migrations OWNER TO fifth_ed_spells;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE django_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE django_migrations_id_seq OWNER TO fifth_ed_spells;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE django_migrations_id_seq OWNED BY django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE django_session OWNER TO fifth_ed_spells;

--
-- Name: django_site; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE django_site (
    id integer NOT NULL,
    domain character varying(100) NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE django_site OWNER TO fifth_ed_spells;

--
-- Name: django_site_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE django_site_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE django_site_id_seq OWNER TO fifth_ed_spells;

--
-- Name: django_site_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE django_site_id_seq OWNED BY django_site.id;


--
-- Name: easy_thumbnails_source; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE easy_thumbnails_source (
    id integer NOT NULL,
    storage_hash character varying(40) NOT NULL,
    name character varying(255) NOT NULL,
    modified timestamp with time zone NOT NULL
);


ALTER TABLE easy_thumbnails_source OWNER TO fifth_ed_spells;

--
-- Name: easy_thumbnails_source_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE easy_thumbnails_source_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE easy_thumbnails_source_id_seq OWNER TO fifth_ed_spells;

--
-- Name: easy_thumbnails_source_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE easy_thumbnails_source_id_seq OWNED BY easy_thumbnails_source.id;


--
-- Name: easy_thumbnails_thumbnail; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE easy_thumbnails_thumbnail (
    id integer NOT NULL,
    storage_hash character varying(40) NOT NULL,
    name character varying(255) NOT NULL,
    modified timestamp with time zone NOT NULL,
    source_id integer NOT NULL
);


ALTER TABLE easy_thumbnails_thumbnail OWNER TO fifth_ed_spells;

--
-- Name: easy_thumbnails_thumbnail_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE easy_thumbnails_thumbnail_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE easy_thumbnails_thumbnail_id_seq OWNER TO fifth_ed_spells;

--
-- Name: easy_thumbnails_thumbnail_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE easy_thumbnails_thumbnail_id_seq OWNED BY easy_thumbnails_thumbnail.id;


--
-- Name: easy_thumbnails_thumbnaildimensions; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE easy_thumbnails_thumbnaildimensions (
    id integer NOT NULL,
    thumbnail_id integer NOT NULL,
    width integer,
    height integer,
    CONSTRAINT easy_thumbnails_thumbnaildimensions_height_check CHECK ((height >= 0)),
    CONSTRAINT easy_thumbnails_thumbnaildimensions_width_check CHECK ((width >= 0))
);


ALTER TABLE easy_thumbnails_thumbnaildimensions OWNER TO fifth_ed_spells;

--
-- Name: easy_thumbnails_thumbnaildimensions_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE easy_thumbnails_thumbnaildimensions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE easy_thumbnails_thumbnaildimensions_id_seq OWNER TO fifth_ed_spells;

--
-- Name: easy_thumbnails_thumbnaildimensions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE easy_thumbnails_thumbnaildimensions_id_seq OWNED BY easy_thumbnails_thumbnaildimensions.id;


--
-- Name: registration_registrationprofile; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE registration_registrationprofile (
    id integer NOT NULL,
    activation_key character varying(40) NOT NULL,
    user_id integer NOT NULL,
    activated boolean NOT NULL
);


ALTER TABLE registration_registrationprofile OWNER TO fifth_ed_spells;

--
-- Name: registration_registrationprofile_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE registration_registrationprofile_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE registration_registrationprofile_id_seq OWNER TO fifth_ed_spells;

--
-- Name: registration_registrationprofile_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE registration_registrationprofile_id_seq OWNED BY registration_registrationprofile.id;


--
-- Name: social_auth_association; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE social_auth_association (
    id integer NOT NULL,
    server_url character varying(255) NOT NULL,
    handle character varying(255) NOT NULL,
    secret character varying(255) NOT NULL,
    issued integer NOT NULL,
    lifetime integer NOT NULL,
    assoc_type character varying(64) NOT NULL
);


ALTER TABLE social_auth_association OWNER TO fifth_ed_spells;

--
-- Name: social_auth_association_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE social_auth_association_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE social_auth_association_id_seq OWNER TO fifth_ed_spells;

--
-- Name: social_auth_association_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE social_auth_association_id_seq OWNED BY social_auth_association.id;


--
-- Name: social_auth_code; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE social_auth_code (
    id integer NOT NULL,
    email character varying(254) NOT NULL,
    code character varying(32) NOT NULL,
    verified boolean NOT NULL
);


ALTER TABLE social_auth_code OWNER TO fifth_ed_spells;

--
-- Name: social_auth_code_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE social_auth_code_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE social_auth_code_id_seq OWNER TO fifth_ed_spells;

--
-- Name: social_auth_code_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE social_auth_code_id_seq OWNED BY social_auth_code.id;


--
-- Name: social_auth_nonce; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE social_auth_nonce (
    id integer NOT NULL,
    server_url character varying(255) NOT NULL,
    "timestamp" integer NOT NULL,
    salt character varying(65) NOT NULL
);


ALTER TABLE social_auth_nonce OWNER TO fifth_ed_spells;

--
-- Name: social_auth_nonce_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE social_auth_nonce_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE social_auth_nonce_id_seq OWNER TO fifth_ed_spells;

--
-- Name: social_auth_nonce_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE social_auth_nonce_id_seq OWNED BY social_auth_nonce.id;


--
-- Name: social_auth_usersocialauth; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE social_auth_usersocialauth (
    id integer NOT NULL,
    provider character varying(32) NOT NULL,
    uid character varying(255) NOT NULL,
    extra_data text NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE social_auth_usersocialauth OWNER TO fifth_ed_spells;

--
-- Name: social_auth_usersocialauth_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE social_auth_usersocialauth_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE social_auth_usersocialauth_id_seq OWNER TO fifth_ed_spells;

--
-- Name: social_auth_usersocialauth_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE social_auth_usersocialauth_id_seq OWNED BY social_auth_usersocialauth.id;


--
-- Name: util_testfilemodel; Type: TABLE; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE TABLE util_testfilemodel (
    id integer NOT NULL,
    file_field character varying(100) NOT NULL
);


ALTER TABLE util_testfilemodel OWNER TO fifth_ed_spells;

--
-- Name: util_testfilemodel_id_seq; Type: SEQUENCE; Schema: public; Owner: fifth_ed_spells
--

CREATE SEQUENCE util_testfilemodel_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE util_testfilemodel_id_seq OWNER TO fifth_ed_spells;

--
-- Name: util_testfilemodel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fifth_ed_spells
--

ALTER SEQUENCE util_testfilemodel_id_seq OWNED BY util_testfilemodel.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY account_user ALTER COLUMN id SET DEFAULT nextval('account_user_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY account_user_groups ALTER COLUMN id SET DEFAULT nextval('account_user_groups_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY account_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('account_user_user_permissions_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_baserace ALTER COLUMN id SET DEFAULT nextval('app_baserace_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_item ALTER COLUMN id SET DEFAULT nextval('app_item_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_parentcharacterclass ALTER COLUMN id SET DEFAULT nextval('app_parentcharacterclass_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_player ALTER COLUMN id SET DEFAULT nextval('app_player_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_racialtrait ALTER COLUMN id SET DEFAULT nextval('app_racialtrait_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_skill ALTER COLUMN id SET DEFAULT nextval('app_skill_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_spell ALTER COLUMN id SET DEFAULT nextval('app_spell_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_spellproperty ALTER COLUMN id SET DEFAULT nextval('app_spellproperty_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_subcharacterclass ALTER COLUMN id SET DEFAULT nextval('app_subcharacterclass_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_trait ALTER COLUMN id SET DEFAULT nextval('app_trait_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_traitproperty ALTER COLUMN id SET DEFAULT nextval('app_traitproperty_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY auth_group ALTER COLUMN id SET DEFAULT nextval('auth_group_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('auth_group_permissions_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY auth_permission ALTER COLUMN id SET DEFAULT nextval('auth_permission_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY django_admin_log ALTER COLUMN id SET DEFAULT nextval('django_admin_log_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY django_content_type ALTER COLUMN id SET DEFAULT nextval('django_content_type_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY django_migrations ALTER COLUMN id SET DEFAULT nextval('django_migrations_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY django_site ALTER COLUMN id SET DEFAULT nextval('django_site_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY easy_thumbnails_source ALTER COLUMN id SET DEFAULT nextval('easy_thumbnails_source_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY easy_thumbnails_thumbnail ALTER COLUMN id SET DEFAULT nextval('easy_thumbnails_thumbnail_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY easy_thumbnails_thumbnaildimensions ALTER COLUMN id SET DEFAULT nextval('easy_thumbnails_thumbnaildimensions_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY registration_registrationprofile ALTER COLUMN id SET DEFAULT nextval('registration_registrationprofile_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY social_auth_association ALTER COLUMN id SET DEFAULT nextval('social_auth_association_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY social_auth_code ALTER COLUMN id SET DEFAULT nextval('social_auth_code_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY social_auth_nonce ALTER COLUMN id SET DEFAULT nextval('social_auth_nonce_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY social_auth_usersocialauth ALTER COLUMN id SET DEFAULT nextval('social_auth_usersocialauth_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY util_testfilemodel ALTER COLUMN id SET DEFAULT nextval('util_testfilemodel_id_seq'::regclass);


--
-- Data for Name: account_user; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY account_user (id, password, last_login, is_superuser, created, modified, email, first_name, last_name, is_staff, is_active) FROM stdin;
1	pbkdf2_sha256$24000$UlYtyTJxOdbb$BguSL0r0B10mC/aiC5tvSBG5jsVh9jsjjle5FSq2AqA=	2016-06-04 14:43:50.180877-04	t	2016-05-28 17:10:43.641389-04	2016-05-28 17:11:07.107523-04	m@m.com			t	t
\.


--
-- Data for Name: account_user_groups; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY account_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Name: account_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('account_user_groups_id_seq', 1, false);


--
-- Name: account_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('account_user_id_seq', 1, true);


--
-- Data for Name: account_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY account_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Name: account_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('account_user_user_permissions_id_seq', 1, false);


--
-- Data for Name: app_armor; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY app_armor (item_ptr_id, armor_value, armor_class, stealth_disadvantage, strength_requirement, has_dex_modifier, weight) FROM stdin;
\.


--
-- Data for Name: app_baserace; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY app_baserace (id, name, ability_scores, has_darkvision, armor, weapons, languages, skills, speed) FROM stdin;
2	Dwarf	{0,2,0,0,0,0,0}	t	{}	{warhammer,battleaxe,"throwing hammer",handaxe}	{Dwarven,Common}	{}	30
3	Wood	{0,0,0,0,1,0,0}	t	{}	{longsword,shortbow,longbow}	{Elven,Common}	{}	35
4	Drow	{0,0,0,0,0,1,0}	t	{}	{rapier,"hand crossbow"}	{Elven,Common}	{}	30
5	Hill	{0,0,0,0,1,0,0}	t	{}	{warhammer,battleaxe,"throwing hammer",handaxe}	{Dwarven,Common}	{}	30
6	Mountain	{2,0,0,0,0,0,0}	t	{light,medium}	{warhammer,battleaxe,"throwing hammer",handaxe}	{Dwarven,Common}	{}	30
7	High	{0,0,0,1,0,0,0}	t	{}	{longsword,shortbow,longbow}	{Elven,Common}	{}	30
8	Halfling	{0,0,2,0,0,0,0}	f	{}	{}	{Halfling,Common}	{}	25
9	Lightfoot	{0,0,0,0,0,1,0}	f	{}	{}	{}	{}	25
10	Stout	{0,1,0,0,0,0,0}	f	{}	{}	{}	{}	30
11	Human	{0,0,0,0,0,0,2}	f	{}	{}	{Common}	{}	30
12	Dragonborn	{2,0,0,0,0,1,0}	f	{}	{}	{Draconic,Common}	{}	30
13	Black	{0,0,0,0,0,0,0}	f	{}	{}	{}	{}	30
14	Blue	{0,0,0,0,0,0,0}	f	{}	{}	{}	{}	30
1	Elf	{0,0,2,0,0,0,0}	t	{}	{shortsword}	{Elven,Common}	{Perception}	30
\.


--
-- Name: app_baserace_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('app_baserace_id_seq', 14, true);


--
-- Data for Name: app_item; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY app_item (id, name, cost) FROM stdin;
2	Javelin	0.50
3	Glaive	20.00
4	Club	0.10
5	Dagger	2.00
6	Greatclub	0.20
7	Handaxe	5.00
9	Mace	5.00
10	Quarterstaff	0.20
11	Sickle	1.00
12	Spear	1.00
13	Light Crossbow	25.00
14	Dart	0.05
15	Shortbow	25.00
16	Sling	0.10
17	Battleaxe	10.00
18	Flail	10.00
20	Greatsword	50.00
19	Greataxe	30.00
21	Halberd	20.00
22	Longsword	15.00
23	Maul	10.00
24	Morningstar	15.00
25	Pike	5.00
26	Rapier	25.00
27	Scimitar	25.00
28	Shortsword	10.00
29	Trident	5.00
30	War Pick	5.00
31	Warhammer	15.00
32	Whip	2.00
33	Hand Crossbow	75.00
34	Heavy Crossbow	50.00
35	Longbow	50.00
8	Throwing Hammer	2.00
\.


--
-- Name: app_item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('app_item_id_seq', 1, false);


--
-- Data for Name: app_parentcharacterclass; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY app_parentcharacterclass (id, name, skills, skill_choices, armor, weapons, languages, hp_die, saving_throws) FROM stdin;
\.


--
-- Name: app_parentcharacterclass_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('app_parentcharacterclass_id_seq', 1, false);


--
-- Data for Name: app_parentrace; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY app_parentrace (baserace_ptr_id) FROM stdin;
1
2
8
11
12
\.


--
-- Data for Name: app_player; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY app_player (id, created, modified, character_name, player_id) FROM stdin;
\.


--
-- Name: app_player_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('app_player_id_seq', 1, false);


--
-- Data for Name: app_racialtrait; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY app_racialtrait (id, name, "desc", trait_type, trait_value, race_id) FROM stdin;
1	Keen Senses	Proficiency in the Perception Skill	{skill}	proficient	1
2	Fey Ancestry (Sleep)	Magic can’t put you to sleep.	{sleep}	immune	1
3	Fey Ancestry (Charm)	Advantage on saving throws when being charmed.	{charm}	advantage	1
4	Trance	Elves don’t needtosleep. Instead, they meditate deeply, remaining semiconscious, for 4\r\nhours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.	{meditation}	short	1
5	Mask of the Wild	You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.	{stealth}	?	3
6	Sunlight Sensitivity	You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.	{disadvantage}	attack?	4
7	Drow Magic	You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once per day. When you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spellcasting ability for these spells.	{spell}		4
8	Superior Darkvision	Can see up to 120ft in low light.	{vision}	enhanced	4
9	Dwarven Toughness	Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.	{hp}	level	5
10	Cantrip	You can choose one extra cantrip from the the wizard spell list. Intelligence is your spellcasting ability for it.	{spell}	free cantrip	7
11	Extra Language	Pick another language	{language}	extra	7
12	Lucky	When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.	{advantage}	critical fail	8
13	Brave	You have advantage on saving throws against being frightened.	{advantage}	fear	8
14	Halfling Nimbleness	You can move through the space of any creature that is of a size larger than yours.	{}		8
15	Naturally Stealthy	You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.	{}		9
16	Stout Resilience (advantage)	You have advantage on saving throws against poison.	{advantage}	poison	10
17	Stout Resilience (resist)	You have resistance against poison damage.	{resist}	poison	10
18	Extra Language	Pick another language.	{language}	extra	11
19	Breath Weapon (Acid)	5 by 30 ft. line (Dex. save)	{special}	attack?	13
20	Damage Resistance (Acid)	Resistance to acid damage.	{resist}	acid	13
21	Breath Weapon (Lightning)	5 by 30 ft. line (Dex. save)	{}		14
22	Damage Resistance (Lightning)	Damage resistance to lightning damage.	{resist}	lightning	14
\.


--
-- Name: app_racialtrait_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('app_racialtrait_id_seq', 22, true);


--
-- Data for Name: app_skill; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY app_skill (id, name, ability, "desc") FROM stdin;
1	Acrobatics	dexterity	Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when you’re trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship’s deck. The DM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips.
2	Sleight of Hand	dexterity	Whenever you attempt an act of legerdemain or manual trickery, such as planting something on someone else or concealing an object on your person, make a Dexterity (Sleight of Hand) check. The DM might also call for a Dexterity (Sleight of Hand) check to determine whether you can lift a coin purse off another person or slip something out of another person’s pocket.
3	Stealth	dexterity	Make a Dexterity (Stealth) check when you attempt to conceal yourself from enemies, slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard.
4	Athletics	strength	Your Strength (Athletics) check covers difficult situations you encounter while climbing, jumping, or swimming.
5	Arcana	intelligence	Your Intelligence (Arcana) check measures your ability to recall lore about spells, magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants of those planes.
6	History	intelligence	Your Intelligence (History) check measures your ability to recall lore about historical events, legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations.
7	Investigation	intelligence	W hen you look around for clues and make deductions based on those clues, you make an Intelligence (Investigation) check. You might deduce the location of a hidden object, discern from the appearance of a wound what kind of weapon dealt it, or determine the weakest point in a tunnel that could cause it to collapse. Poring through ancient scrolls in search of a hidden fragment of knowledge might also call for an Intelligence (Investigation) check.
8	Nature	intelligence	Your Intelligence (Nature) check measures your ability to recall lore about terrain, plants and animals, the weather, and natural cycles.
9	Animal Handling	wisdom	When there is any question whether you can calm down a domesticated animal, keep a mount from getting spooked, or intuit an animal’s intentions, the DM might call for a Wisdom (Animal Handling) check. You also make a W isdom (Animal Handling) check to control your mount when you attempt a risky maneuver.
10	Insight	wisdom	Your Wisdom (Insight) check decides whether you can determine the true intentions of a creature, such as when searching out a lie or predicting someone’s next move. Doing so involves gleaning clues from body language, speech habits, and changes in mannerisms.
11	Medicine	wisdom	A Wisdom (Medicine) check lets you try to stabilize a dying companion or diagnose an illness.
12	Perception	wisdom	Your Wisdom (Perception) check lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses.
13	Survival	wisdom	 The DM might ask you to make a Wisdom (Survival) check to follow tracks, hunt wild game, guide your group through frozen wastelands, identify signs that owlbears live nearby, predict the weather, or avoid quicksand and other natural hazards.
14	Deception	charisma	Your Charisma (Deception) check determines whether you can convincingly hide the truth, either verbally or through your actions. This deception can encompass everything from misleading others through ambiguity to telling outright lies. Typical situations include trying to fast-talk a guard, con a merchant, earn money through gambling, pass yourself off in a disguise, dull someone’s suspicions with false assurances, or maintain a straight face while telling a blatant lie.
15	Intimidation	charisma	When you attempt to influence someone through overt threats, hostile actions, and physical violence, the DM might ask you to make a Charisma (Intimidation) check. Examples include trying to pry information out of a prisoner, convincing street thugs to back down from a confrontation, or using the edge of a broken bottle to convince a sneering vizier to reconsider a decision.
16	Performance	charisma	Your Charisma (Performance) check determines how well you can delight an audience with music, dance, acting, storytelling, or some other form of entertainment.
17	Persuasion	charisma	When you attempt to influence som eone or a group of people with tact, social graces, or good nature, the DM might ask you to make a Charisma (Persuasion) check. Typically, you use persuasion when acting in good faith, to foster friendships, make cordial requests, or exhibit proper etiquette. Examples of persuading others include convincing a chamberlain to let your party see the king, negotiating peace between warring tribes, or inspiring a crowd of townsfolk.
18	Religion	intelligence	Your Intelligence (Religion) check measures your ability to recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults.
\.


--
-- Name: app_skill_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('app_skill_id_seq', 1, false);


--
-- Data for Name: app_spell; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY app_spell (id, created, modified, name, "desc", requires_concentration, casting_time, components, components_desc, spell_range, spell_shape, level, duration, school) FROM stdin;
1	2016-05-28 16:48:07.775767-04	2016-05-28 16:48:07.782084-04	Resistance	You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after the saving throw. The spell then ends.	t	1 action	{V,S,M}		Touch	\N	0	up to 1 minute	Abjuration
2	2016-05-28 16:48:07.790054-04	2016-05-28 16:48:07.790291-04	Divine Favor	Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal and extra 1d4 radiant damage on a hit.	t	1 bonus action	{V,S}		Self	\N	1	up to 1 minute	Evocation
3	2016-05-28 16:48:07.796949-04	2016-05-28 16:48:07.797199-04	Light	You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.\n If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell. 	f	1 action	{V,M}	a firefly or phosphorescent moss	Touch	\N	0	1 hour	Evocation
4	2016-05-28 16:48:07.802672-04	2016-05-28 16:48:07.802946-04	Sacred Flame	Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.\n The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8). 	f	1 action	{V,S}		60 feet	\N	0	Instantaneous	Evocation
5	2016-05-28 16:48:07.804019-04	2016-05-28 16:48:07.804216-04	Spare the Dying	You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.	f	1 action	{V,S}		Touch	\N	0	Instantaneous	Necromancy
6	2016-05-28 16:48:07.805066-04	2016-05-28 16:48:07.805258-04	Thaumaturgy	You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range.\n • Your voice booms up to three times as loud as normal for 1 minute. • You cause flames to flicker, brighten, dim, or change color for 1 minute. • You cause harmless tremors in the ground for 1 minute. • You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers. • You instantaneously cause an unlocked door or window to fly open or slam shut. • You alter the appearance of your eyes for 1 minute. If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action. 	f	1 action	{V}		30 feet	\N	0	1 minute	Transmutation
7	2016-05-28 16:48:07.806375-04	2016-05-28 16:48:07.806719-04	Faerie Fire	Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius.\n Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible. 	t	1 action	{V}		60 feet	\N	1	up to 1 minute	Evocation
8	2016-05-28 16:48:07.808272-04	2016-05-28 16:48:07.808497-04	Detect Poison and Disease	For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case.\n The spell can penetrate most barriers, but is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt. 	t	1 action	{V,S,M}	a yew leaf	Self	\N	1	up to 10 minutes	Divination
9	2016-05-28 16:48:07.809501-04	2016-05-28 16:48:07.809696-04	False Life	Bolstering yourself with a necromantic facsimile of life, you gain 1d4+4 temporary hit points for the duration.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st. 	f	1 action	{V,S,M}	a small amount of alcohol or distilled spirits	Self	\N	1	1 hour	Necromancy
10	2016-05-28 16:48:07.810582-04	2016-05-28 16:48:07.810768-04	Guidance	You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.	t	1 action	{V,S}		Touch	\N	0	up to 1 minute	Divination
11	2016-05-28 16:48:07.811625-04	2016-05-28 16:48:07.811805-04	Fog Cloud	You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st. 	t	1 action	{V,S}		120 feet	\N	1	up to 1 hour	Conjuration
12	2016-05-28 16:48:07.812769-04	2016-05-28 16:48:07.813013-04	Mending	This spell repairs a single break or tear in an object you touch, such as broken chain link, two halves of a broken key, a torn clack, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage.\n This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object. 	f	1 minute	{V,S,M}	two lodestones	Touch	\N	0	Instantaneous	Transmutation
13	2016-05-28 16:48:07.813958-04	2016-05-28 16:48:07.814149-04	Bless	You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. 	t	1 action	{V,S,M}	a sprinkling of holy water	30 feet	\N	1	up to 1 minute	Enchantment
14	2016-05-28 16:48:07.814992-04	2016-05-28 16:48:07.815181-04	Healing Word	A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st. 	f	1 bonus action	{V}		60 feet	\N	1	Instantaneous	Evocation
15	2016-05-28 16:48:07.816005-04	2016-05-28 16:48:07.816244-04	Inflict Wounds	Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st. 	f	1 action	{V,S}		Touch	\N	1	Instantaneous	Necromancy
16	2016-05-28 16:48:07.817634-04	2016-05-28 16:48:07.818366-04	Magic Missile	You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4+1 force damage to its target. The darts all strike simultaneously and you can direct them to hit one creature or several.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot above 1st. 	f	1 action	{V,S}		120 feet	\N	1	Instantaneous	Evocation
17	2016-05-28 16:48:07.821158-04	2016-05-28 16:48:07.821485-04	Guiding Bolt	A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st. 	f	1 action	{V,S}		120 feet	\N	1	1 round	Evocation
18	2016-05-28 16:48:07.822614-04	2016-05-28 16:48:07.822821-04	Identify (ritual)	You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it.\n If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it. 	f	1 minute	{V,S,M}	a pearl worth at least 100 gp and an owl feather	Touch	\N	1	Instantaneous	Divination
19	2016-05-28 16:48:07.82362-04	2016-05-28 16:48:07.823804-04	Animal Friendship	This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spell ends.\n At Higher Levels: When you cast this spell using a 2nd level spell slot or higher, you can affect one additional beast for each slot level above 1st. 	f	1 action	{V,S,M}	a morsel of food	30 feet	\N	1	24 hours	Enchantment
20	2016-05-28 16:48:07.824734-04	2016-05-28 16:48:07.824961-04	Protection from Evil and Good	Until the spell ends, one willing creature you touch is protected against certain types of creatures - aberrations, celestials, elementals, fey, fiends, and undead.\n The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect. 	t	1 action	{V,S,M}	holy water or powdered silver and iron, which the spell consumes	Touch	\N	1	up to 10 minutes	Abjuration
21	2016-05-28 16:48:07.825804-04	2016-05-28 16:48:07.825997-04	Bane	Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. 	t	1 action	{V,S,M}	a drop of blood	30 feet	\N	1	up to 1 minute	Enchantment
22	2016-05-28 16:48:07.826762-04	2016-05-28 16:48:07.826944-04	Charm Person	You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them. 	f	1 action	{V,S}		30 feet	\N	1	1 hour	Enchantment
23	2016-05-28 16:48:07.827707-04	2016-05-28 16:48:07.827901-04	Burning Hands	As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.\n The fire ignites any flammable objects in the area that aren't being worn or carried. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st. 	f	1 action	{V,S}		Self (15-foot cone)	\N	1	Instantaneous	Evocation
24	2016-05-28 16:48:07.828722-04	2016-05-28 16:48:07.828908-04	Detect Evil and Good	For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 30 feet of you, as well as where the creature is located. Similarly, you know if there is a place of object within 30 feet of you that has been magically consecrated or desecrated. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.	t	1 action	{V,S}		Self	\N	1	up to 10 minutes	Divination
25	2016-05-28 16:48:07.829663-04	2016-05-28 16:48:07.829848-04	Command	You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn't understand your language, or if your command is directly harmful to it.\n Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the DM determines how the target behaves. If the target can't follow your command, the spell ends. Approach: The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you. Drop: The target drops whatever it is holding and then ends its turn. Flee: The target spends its turn moving away from you by the fastest available means. Grovel: The target falls prone and then ends its turn. Halt: The target doesn't move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them. 	f	1 action	{V}		60 feet	\N	1	1 round	Enchantment
26	2016-05-28 16:48:07.830699-04	2016-05-28 16:48:07.830891-04	Cure Wounds	A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st. 	f	1 action	{V,S}		Touch	\N	1	Instantaneous	Evocation
27	2016-05-28 16:48:07.831596-04	2016-05-28 16:48:07.831802-04	Detect Magic (ritual)	For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.\n The spell can penetrate most barriers, but is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt. 	t	1 action	{V,S}		Self	\N	1	up to 10 minutes	Divination
28	2016-05-28 16:48:07.832889-04	2016-05-28 16:48:07.833154-04	Create or Destroy Water	You either create or destroy water.\n Create Water: You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range, extinguishing exposed flames in the area. Destroy Water: You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot cube within range. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st. 	f	1 action	{V,S,M}	a drop of water if creating water or a few grains of sand if destroying it	30 feet	\N	1	Instantaneous	Transmutation
29	2016-05-28 16:48:07.834016-04	2016-05-28 16:48:07.83422-04	Sanctuary	You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects, such as the explosion of a fireball.\n If the warded creature makes an attack or casts a spell that affects an enemy creature, this spell ends. 	f	1 bonus action	{V,S,M}	a small silver mirror	30 feet	\N	1	1 minute	Abjuration
30	2016-05-28 16:48:07.834903-04	2016-05-28 16:48:07.835076-04	Shield of Faith	A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.	t	1 bonus action	{V,S,M}	a small parchment with a bit of holy text written on it	60 feet	\N	1	up to 10 minutes	Abjuration
31	2016-05-28 16:48:07.83578-04	2016-05-28 16:48:07.835992-04	Thunderwave	A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed.\n In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st. 	f	1 action	{V,S}		Self (15-foot cube)	\N	1	Instantaneous	Evocation
32	2016-05-28 16:48:07.836726-04	2016-05-28 16:48:07.836911-04	Ray of Sickness	A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st. 	f	1 action	{V,S}		60 feet	\N	1	Instantaneous	Necromancy
33	2016-05-28 16:48:07.837576-04	2016-05-28 16:48:07.837747-04	Aid	Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.\n At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd. 	f	1 action	{V,S,M}	a tiny strip of white cloth	30 feet	\N	2	8 hours	Abjuration
34	2016-05-28 16:48:07.838548-04	2016-05-28 16:48:07.838739-04	Speak with Animals (ritual)	You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM's discretion.	f	1 action	{V,S}		Self	\N	1	10 minutes	Divination
35	2016-05-28 16:48:07.839451-04	2016-05-28 16:48:07.839632-04	Purify Food and Drink (ritual)	All nonmagical food and drink within a 5-foot-radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease.	f	1 action	{V,S}		10 feet	\N	1	Instantaneous	Transmutation
36	2016-05-28 16:48:07.840338-04	2016-05-28 16:48:07.840527-04	Augury (ritual)	By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. The DM chooses from the following possible omens.\n • Weal, for good results • Woe, for bad results • Weal and woe, for both good and bad results • Nothing, for results that aren't especially good or bad The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion. If you cast the spell two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret. 	f	1 minute	{V,S,M}	specially marked sticks, bones, or similar tokens worth at least 25 gp	Self	\N	2	Instantaneous	Divination
37	2016-05-28 16:48:07.841268-04	2016-05-28 16:48:07.84146-04	Blindness/Deafness	You can blind or deafen a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends.\n At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd. 	f	1 action	{V}		30 feet	\N	2	1 minute	Necromancy
38	2016-05-28 16:48:07.84214-04	2016-05-28 16:48:07.842323-04	Arcane Eye	You create an invisible, magical eye within range that hovers in the air for the duration.\n You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction. As an action, you can move the eye up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can't enter another plane of existence. A solid barrier blocks the eye's movement, but the eye can pass through an opening as small as 1 inch in diameter. 	t	1 action	{V,S,M}	a bit of bat fur	30 feet	\N	4	up to 1 hour	Divination
39	2016-05-28 16:48:07.843027-04	2016-05-28 16:48:07.843201-04	Circle of Death	A sphere of negative energy ripples out in a 60-foot-radius sphere from a point within range. Each creature in that area must make a Constitution saving throw. A target takes 8d6 necrotic damage on a failed save, or half as much damage on a successful one.\n At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, the damage increases by 2d6 for each slot level above 6th. 	f	1 action	{V,S,M}	the powder of a crushed black pearl worth at least 500 gp	150 feet	\N	6	Instantaneous	Necromancy
40	2016-05-28 16:48:07.843914-04	2016-05-28 16:48:07.844094-04	Calm Emotions	You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a Charisma saving throw a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects.\n You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime. Alternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the DM rules otherwise. 	t	1 action	{V,S}		60 feet	\N	2	up to 1 minute	Enchantment
41	2016-05-28 16:48:07.84479-04	2016-05-28 16:48:07.84497-04	Hold Person	Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.\n At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, you can target on additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them. 	t	1 action	{V,S,M}	a small, straight piece of iron	60 feet	\N	2	up to 1 minute	Enchantment
42	2016-05-28 16:48:07.846074-04	2016-05-28 16:48:07.846261-04	Barkskin	You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing.	t	1 action	{V,S,M}	a handful of oak bark	Touch	\N	2	up to 1 hour	Transmutation
43	2016-05-28 16:48:07.846947-04	2016-05-28 16:48:07.847126-04	Continual Flame	A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesn't use oxygen. A continual flame can be covered or hidden but not smothered or quenched.	f	1 action	{V,S,M}	ruby dust worth 50 gp, which the spell consumes	Touch	\N	2		Evocation
44	2016-05-28 16:48:07.847921-04	2016-05-28 16:48:07.848112-04	Lesser Restoration	You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.	f	1 action	{V,S}		Touch	\N	2	Instantaneous	Abjuration
45	2016-05-28 16:48:07.848811-04	2016-05-28 16:48:07.848997-04	Grasping Vine	You conjure a vine that sprouts from the ground in an unoccupied space of your choice that you can see within range. When you cast this spell, you can direct the vine to lash out at a creature within 30 feet of it that you can see. That creature must succeed on a Dexterity saving throw or be pulled 20 feet directly toward the vine.\n Until the spell ends, you can direct the vine to lash out at the same creature or another one as a bonus action on each of your turns. 	t	1 bonus action	{V,S}		30 feet	\N	4	up to 1 minute	Conjuration
46	2016-05-28 16:48:07.849842-04	2016-05-28 16:48:07.850059-04	Flaming Sphere	A 5-foot-diameter sphere of fire appears in an unoccupied space of your choice within range and lasts for the duration. Any creature that ends its turn within 5 feet of the sphere must make a Dexterity saving throw. The creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.\n As a bonus action, you can move the sphere up to 30 feet. If you ram the sphere into a creature, that creature must make the saving throw against the sphere's damage, and the sphere stops moving this turn. When you move the sphere, you can direct it over barriers up to 5 feet tall and jump it across pits up to 10 feet wide. The sphere ignites flammable objects not being worn or carried, and it sheds bright light in a 20-foot radius and dim light for an additional 20 feet. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd. 	t	1 action	{V,S,M}	a bit of tallow, a pinch of brimstone, and a dusting of powdered iron	60 feet	\N	2	up to 1 minute	Conjuration
47	2016-05-28 16:48:07.851035-04	2016-05-28 16:48:07.851245-04	Gentle Repose (ritual)	(a pinch of salt and one copper piece placed on each of the corpse's eyes, which must remain there for the duration)You touch a corpse or other remains. For the duration, the target is protected from decay and can't become undead.\n The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don't count against the time limit of spells such as raise dead. 	f	1 action	{V,S,M}		Touch	\N	2	10 days	Necromancy
48	2016-05-28 16:48:07.851979-04	2016-05-28 16:48:07.852156-04	Scorching Ray	You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several.\n Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd. 	f	1 action	{V,S}		120 feet	\N	2	Instantaneous	Evocation
49	2016-05-28 16:48:07.852839-04	2016-05-28 16:48:07.853021-04	Find Traps	You sense the presence of any trap within range that is within line of sight. A trap, for the purpose of this spell, includes anything that would inflict a sudden or unexpected effect you consider harmful or undesirable, which was specifically intended as such by its creator. Thus, the spell would sense an area affected by the alarm spell, a glyph of warding, or a mechanical pit trap, but it would not reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole.\n This spell merely reveals that a trap is present. You don't learn the location of each trap, but you do learn the general nature of the danger posed by a trap you sense. 	f	1 action	{V,S}		120 feet	\N	2	Instantaneous	Divination
50	2016-05-28 16:48:07.853734-04	2016-05-28 16:48:07.853915-04	Prayer of Healing	Up to six creatures of your choice that you can see within range each regain hit points equal to 2d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.\n At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d8 for each slot level above 2nd. 	f	10 minutes	{V}		30 feet	\N	2	Instantaneous	Evocation
344	2016-05-28 16:48:08.143342-04	2016-05-28 16:48:08.143516-04	Glibness	Until the spell ends, when you make a Charisma check, you can replace the number you roll with a 15. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful.	f	1 action	{V}		Self	\N	8	1 hour	Transmutation
51	2016-05-28 16:48:07.854798-04	2016-05-28 16:48:07.855037-04	Pass Without Trace	A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage.	t	1 action	{V,S,M}	ashes from a burned leaf of mistletoe and a sprig of spruce	Self	\N	2	up to 1 hour	Abjuration
52	2016-05-28 16:48:07.855971-04	2016-05-28 16:48:07.856222-04	Enhance Ability	You touch a creature and bestow upon it a magical enhancement. Choose one of the following effects - the target gains the effect until the spell ends.\n Bear's Endurance: The target has advantage on Constitution checks. It also gains 2d6 temporary hit points, which are lost when the spell ends. Bull's Strength: The target has advantage on Strength checks, and his or her carrying capacity doubles. Cat's Grace: The target has advantage on Dexterity checks. It also doesn't take damage from falling 20 feet or less if it isn't incapacitated. Eagle's Splendor: The target has advantage on Charisma checks. Fox's Cunning: The target has advantage on Intelligence checks. Owl's Wisdom: The target has advantage on Wisdom checks. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd. 	t	1 action	{V,S,M}	fur or a feather from a beast	Touch	\N	2	up to 1 hour	Transmutation
53	2016-05-28 16:48:07.857155-04	2016-05-28 16:48:07.857411-04	Ray of Enfeeblement	A black beam of enervating energy springs from your finger toward a creature within range. Make a ranged spell attack against the target. On a hit, the target deals only half damage with weapon attacks that use Strength until the spell ends.\n At the end of each of the target's turns, it can make a Constitution saving throw against the spell. On a success, the spell ends. 	t	1 action	{V,S}		60 feet	\N	2	up to 1 minute	Necromancy
54	2016-05-28 16:48:07.858324-04	2016-05-28 16:48:07.858565-04	Protection from Poison	You touch a creature. If it is poisoned, you neutralize the poison. If more than one poison afflicts the target, you neutralize on poison that you know is present, or you neutralize one at random.\n For the duration, the target has advantage on saving throws against being poisoned, and it has resistance to poison damage. 	f	1 action	{V,S}		Touch	\N	2	1 hour	Abjuration
55	2016-05-28 16:48:07.859585-04	2016-05-28 16:48:07.859835-04	Mirror Image	Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it's impossible to track which image is real. You can use your action to dismiss the illusory duplicates.\n Each time a creature targets you with an attack during the spell's duration, roll a d20 to determine whether the attack instead targets one of your duplicates. If you have three duplicates, you must roll a 6 or higher to change the attack's target to a duplicate. With two duplicates, you must roll an 8 or higher. With one duplicate, you must roll an 11 or higher. A duplicate's AC equals 10 + your Dexterity modifier. If an attack hits a duplicate, the duplicate is destroyed. A duplicate can be destroyed only by an attack that hits it. It ignores all other damage and effects. The spell ends when all three duplicates are destroyed. A creature is unaffected by this spell if it can't see, if it relies on senses other than sight, such as blindsight, or if it can perceive illusions as false, as with truesight. 	f	1 action	{V,S}		Self	\N	2	1 minute	Illusion
56	2016-05-28 16:48:07.860746-04	2016-05-28 16:48:07.86098-04	Magic Weapon	You touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls.\n At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the bonus increases to +2. When you use a spell slot of 6th level or higher, the bonus increases to +3. 	t	1 bonus action	{V,S}		Touch	\N	2	up to 1 hour	Transmutation
57	2016-05-28 16:48:07.861836-04	2016-05-28 16:48:07.862072-04	Locate Object	Describe or name an object that is familiar to you. You sense the direction to the object's location, as long as that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement.\n The spell can locate a specific object known to you, as long as you have seen it up close - within 30 feet - at least once. Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon. This spell can't locate an object if any thickness of lead, even a thin sheet, blocks a direct path between you and the object. 	t	1 action	{V,S,M}	a forked twig	Self	\N	2	up to 10 minutes	Divination
58	2016-05-28 16:48:07.862932-04	2016-05-28 16:48:07.863165-04	Nystul's Magic Aura	You place an illusion on a creature or an object you touch so that divination spells reveal false information about it. The target can be a willing creature or an object that isn't being carried or worn by another creature.\n When you cast the spell, choose one or both of the following effects. The effect lasts for the duration. If you cast this spell on the same creature or object every day for 30 days, placing the same effect on it each time, the illusion lasts until it is dispelled. False Aura: You change the way the target appears to spells and magical effects, such as detect magic, that detect magical auras. You can make a nonmagical object appear magical, a magical object appear nonmagical, or change the object's magical aura so that it appears to belong to a specific school of magic that you choose. When you use this effect on an object, you can make the false magic apparent to any creature that handles the item. Mask: You change the way the target appears to spells and magical effects that detect creature types, such as a paladin's Divine Sense or the trigger of a symbol spell. You choose a creature type and other spells and magical effects treat the target as if it were a creature of that type or of that alignment. 	f	1 action	{V,S,M}	a small square of silk	Touch	\N	2	24 hours	Illusion
59	2016-05-28 16:48:07.86431-04	2016-05-28 16:48:07.864571-04	Shatter	A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw.\n A nonmagical object that isn't being worn or carried also takes the damage if it's in the spell's area. At Higher Levels: When you cast this spell using a spell slot of or higher, the damage increases by 1d8 for each slot level above 2nd. 	f	1 action	{V,S,M}	a chip of mica	60 feet	\N	2	Instantaneous	Evocation
60	2016-05-28 16:48:07.86554-04	2016-05-28 16:48:07.865795-04	Silence (ritual)	For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there.	t	1 action	{V,S}		120 feet	\N	2	up to 10 minutes	Illusion
61	2016-05-28 16:48:07.866732-04	2016-05-28 16:48:07.866977-04	Goodberry	Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for one day.\n The berries lose their potency if they have not been consumed within 24 hours of the casting of this spell. 	f	1 action	{V,S,M}	a sprig of mistletoe	Touch	\N	1	Instantaneous	Transmutation
62	2016-05-28 16:48:07.867937-04	2016-05-28 16:48:07.868178-04	Spiritual Weapon	You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8 + your spellcasting ability modifier.\n As a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it. The weapon can take whatever form you choose. Clerics of deities who are associated with a particular weapon (as St. Cuthbert is known for his mace and Thor for his hammer) make this spell's effect resemble that weapon. At Higher Levels: When you cast this spell using a spell slot 3rd level of or higher, the damage increases by 1d8 for every two slot levels above the 2nd. 	f	1 bonus action	{V,S}		60 feet	\N	2	1 minute	Evocation
63	2016-05-28 16:48:07.869068-04	2016-05-28 16:48:07.8693-04	Guardian of Faith	A Large spectral guardian appears and hovers for the duration in an unoccupied space of your choice that you can see within range. The guardian occupies that space and is indistinct except for a gleaming sword and shield emblazoned with the symbol of your deity.\n Any creature hostile to you that moves to a space within 10 feet of the guardian for the first time on a turn must succeed on a Dexterity saving throw. The creature takes 20 radiant damage on a failed save, or half as much damage on a successful one. The guardian vanishes when it has dealt a total of 60 damage. 	f	1 action	{V}		30 feet	\N	4	8 hours	Conjuration
64	2016-05-28 16:48:07.870143-04	2016-05-28 16:48:07.870372-04	Ice Storm	A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity saving throw. A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage on a successful one.\n Hailstones turn the storm's area of effect into difficult terrain until the end of your next turn. At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d8 for each slot level above 4th. 	f	1 action	{V,S,M}	a pinch of dust and a few drops of water	300 feet	\N	4	Instantaneous	Evocation
65	2016-05-28 16:48:07.871319-04	2016-05-28 16:48:07.871565-04	Warding Bond	This spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has resistance to all damage. Also, each time it takes damage, you take the same amount of damage.\n The spell ends if you drop to 0 hit points or if you and the target become separated by more than 60 feet. It also ends if the spell is cast again on either of the connected creatures. You can also dismiss the spell as an action. 	f	1 action	{V,S,M}	a pair of platinum rings worth at least 50 gp each, which you and target must wear for the duration	Touch	\N	2	1 hour	Abjuration
66	2016-05-28 16:48:07.872485-04	2016-05-28 16:48:07.87274-04	Spike Growth	The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels.\n The transformation of the ground is camouflaged to look natural. Any creature that can't see the area at the time the spell is case must make a Wisdom (Perception) check against your spell save DC to recognize the terrain as hazardous before entering it. 	t	1 action	{V,S,M}	seven sharp thorns or seven small twigs, each sharpened to a point	150 feet	\N	2	up to 10 minutes	Transmutation
67	2016-05-28 16:48:07.873746-04	2016-05-28 16:48:07.873994-04	Beast Bond	You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast's Intelligence is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see.	t	1 action	{V,S,M}	a bit of fur wrapped in a cloth	Touch	\N	1	up to 10 minutes	Divination
68	2016-05-28 16:48:07.875014-04	2016-05-28 16:48:07.875278-04	Beacon of Hope	This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on Wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing.	t	1 action	{V,S}		30 feet	\N	3	up to 1 minute	Abjuration
69	2016-05-28 16:48:07.876232-04	2016-05-28 16:48:07.876468-04	Insect Plague	Swarming, biting locusts fill a 20-foot-radius sphere centered on a point you choose within range. The sphere spreads around corners. The sphere remains for the duration, and its area is lightly obscured. The sphere's area is difficult terrain.\n When the area appears, each creature in it must make a Constitution saving throw. A creature takes 4d10 piercing damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there. At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d10 for each slot level above 5th. 	t	1 action	{V,S,M}	a few grains of sugar, some kernels of grain, and a smear of fat	300 feet	\N	5	up to 10 minutes	Conjuration
70	2016-05-28 16:48:07.877411-04	2016-05-28 16:48:07.877647-04	Hold Monster	Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. This spell has no effect on undead. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.\n At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, you can target on additional creature for each slot level above 5th. The creatures must be within 30 feet of each other when you target them. 	t	1 action	{V,S,M}	a small, straight piece of iron	90 feet	\N	5	up to 1 minute	Enchantment
188	2016-05-28 16:48:07.992862-04	2016-05-28 16:48:07.993034-04	Wall of Water	You conjure up a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The wall's space is difficult terrain.	t	1 action	{V,S,M}	a drop of water	60 feet	\N	3	up to 10 minutes	Evocation
71	2016-05-28 16:48:07.87858-04	2016-05-28 16:48:07.878815-04	Fireball	A bright streak flashes from your pointing finger to a point you choose within range then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot radius must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one.\n The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd. 	f	1 action	{V,S,M}	a tiny ball of bat guano and sulfur	150 feet	\N	3	Instantaneous	Evocation
72	2016-05-28 16:48:07.87979-04	2016-05-28 16:48:07.880046-04	Zone of Truth	You create a magical zone that guards against deception in a 15-foot-radius sphere centered on a point of your choice within range. Until the spell ends, a creature that enters the spell's area for the first time on a turn or starts its turn there must make a Charisma saving throw. On a failed save, a creature can't speak a deliberate lie while in the radius. You know whether each creature succeeds or fails on its saving throw.\n An affected creature is aware of the spell and can thus avoid answering questions to which it would normally respond with a lie. Such creatures can be evasive in its answers as long as it remains within the boundaries of the truth. 	f	1 action	{V,S,M}		60 feet	\N	2	10 minutes	Enchantment
73	2016-05-28 16:48:07.881027-04	2016-05-28 16:48:07.881266-04	Daylight	A 60-foot-radius sphere of light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 60 feet.\n If you chose a point on an object you are holding or one that isn't being worn or carried, the light shines from the object with and moves with it. Completely covering the affected object with an opaque object, such as a bowl or a helm, blocks the light. If any of this spell's area overlaps with an area of darkness created by a spell of or lower, the spell that created the darkness is dispelled. 	f	1 action	{V,S}		60 feet	\N	3	1 hour	Evocation
74	2016-05-28 16:48:07.88229-04	2016-05-28 16:48:07.882622-04	Feign Death (ritual)	You touch a willing creature and put it into a cataleptic state that is indistinguishable from death.\n For the spell's duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the target's status. The target is blinded and incapacitated, and its speed drops to 0. The target has resistance to all damage except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased or poisoned while under the spell's effect, the disease and poison have no effect until the spell ends. 	f	1 action	{V,S,M}	a pinch of graveyard dirt	Touch	\N	3	1 hour	Necromancy
75	2016-05-28 16:48:07.883784-04	2016-05-28 16:48:07.884058-04	Create Food and Water	You create 45 pounds of food and 30 gallons of water on the ground or in containers within range, enough to sustain up to fifteen humanoids or five steeds for 24 hours. The food is bland but nourishing, and spoils if uneaten after 24 hours. The water is clean and doesn't go bad.	f	1 action	{V,S}		30 feet	\N	3	Instantaneous	Conjuration
76	2016-05-28 16:48:07.885058-04	2016-05-28 16:48:07.885298-04	Crusader's Mantle	Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each non-hostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack.	t	1 action	{V}		Self	\N	3	up to 1 minute	Evocation
77	2016-05-28 16:48:07.88626-04	2016-05-28 16:48:07.886444-04	Call Lightning	A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see 100 feet directly above you. The spell fails if you can't see a point in the air where the storm cloud could appear (for example, if you are in a room that can't accommodate the cloud).\n When you cast the spell, choose a point you can see within range. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one. If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spell's damage increases by 1d10. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher level, the damage increases by 1d10 for each slot level above 3rd. 	t	1 action	{V,S}		120 feet	\N	3	up to 10 minutes	Conjuration
78	2016-05-28 16:48:07.887304-04	2016-05-28 16:48:07.887487-04	Dispel Magic	Choose any creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a successful check, the spell ends.\n At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, you automatically end the effects of a spell on the target if the spell's level is equal to or less than the level of the spell slot you used. 	f	1 action	{V,S}		120 feet	\N	3	Instantaneous	Abjuration
79	2016-05-28 16:48:07.888353-04	2016-05-28 16:48:07.888536-04	Magic Circle	You create a 10-foot-radius, 20-foot-tall cylinder of magical energy centered on a point on the ground that you can see within range. Glowing runes appear wherever the cylinder intersects with the floor or other surface.\n Choose one or more of the following types of creatures - celestials, elementals, fey, fiends, or undead. The circle affects a creature of the chosen type in the following ways. • The creature can't willingly enter the cylinder by nonmagical means. If the creature tries to use teleportation or interplanar travel to do so, it must first succeed on a Charisma saving throw. • The creature has disadvantage on attack rolls against targets within the cylinder. • Targets within the cylinder can't be charmed, frightened, or possessed by the creature. When you cast this spell, you can elect to cause its magic to operate in the reverse direction, preventing a creature of the specified type from leaving the cylinder and protecting targets outside it. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the duration increases by 1 hour for each slot level above 3rd. 	f	1 minute	{V,S,M}	holy water or powdered silver and iron worth at least 100 gp, which the spell consumes	10 feet	\N	3	1 hour	Abjuration
80	2016-05-28 16:48:07.889404-04	2016-05-28 16:48:07.88959-04	Mass Healing Word	As you call out words of restoration, up to six creatures of your choice that you can see within range regain hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.\n At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the healing increases by 1d4 for each slot level above 3rd. 	f	1 bonus action	{V}		60 feet	\N	3	Instantaneous	Evocation
81	2016-05-28 16:48:07.890392-04	2016-05-28 16:48:07.890578-04	Sleet Storm	Until the spell ends, freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are doused.\n The ground in the area is covered with slick ice, making it difficult terrain. When a creature enters the spell's area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw. On a failed save, it falls prone. If a creature is concentrating in the spell's area, the creature must make a successful Constitution saving throw against your spell save DC or lose concentration. 	t	1 action	{V,S,M}	a pinch of dust and a few drops of water	150 feet	\N	3	up to 1 minute	Conjuration
82	2016-05-28 16:48:07.891463-04	2016-05-28 16:48:07.891654-04	Speak with Dead	You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can't be undead. The spell fails if the corpse was the target of this spell within the last 10 days.\n Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy. This spell doesn't return the creature's soul to its body, only its animating spirit. Thus, the corpse can't learn new information, doesn't comprehend anything that has happened since it died, and can't speculate about future events. 	f	1 action	{V,S,M}	burning incense	10 feet	\N	3	10 minutes	Necromancy
83	2016-05-28 16:48:07.892471-04	2016-05-28 16:48:07.89266-04	Remove Curse	At your touch, all curses affecting one creature or object end. If the object is a cursed magic item, its curse remains, but the spell breaks its owner's attunement to the object so it can be removed or discarded.	f	1 action	{V,S}		Touch	\N	3	Instantaneous	Abjuration
84	2016-05-28 16:48:07.893475-04	2016-05-28 16:48:07.89367-04	Revivify	You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can't return to life a creature that has died of old age, nor can it restore any missing body parts.	f	1 action	{V,S,M}	diamonds worth 300 gp, which the spell consumes	Touch	\N	3	Instantaneous	Necromancy
85	2016-05-28 16:48:07.894654-04	2016-05-28 16:48:07.894854-04	Sending	You send a short message of twenty-five words or less to a creature with you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables creatures with Intelligence scores of at least 1 to understand the meaning of your message.\n You can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that the message doesn't arrive. 	f	1 action	{V,S,M}	A short piece of fine copper wire	Unlimited	\N	3	1 round	Evocation
86	2016-05-28 16:48:07.895669-04	2016-05-28 16:48:07.895848-04	Nondetection	For the duration, you hide a target that you touch from divination magic. The target can be a willing creature or a place or an object no larger than 10 feet in any dimension. The target can't be targeted by any divination magic or perceived through magical scrying sensors.	f	1 action	{V,S,M}	a pinch of diamond dust worth 25 gp sprinkled over the target, which the spell consumes	Touch	\N	3	8 hours	Abjuration
87	2016-05-28 16:48:07.896633-04	2016-05-28 16:48:07.896814-04	Plant Growth	This spell channels vitality into plants within a specific area. There are two possible uses for the spell, granting either immediate or long-term benefits.\n If you cast this spell using 1 action, choose a point within range. All normal plants in a 100-foot radius centered on that point become thick and overgrown. A creature moving through the area must spend 4 feet of movement for every 1 foot it moves. You can exclude one or more areas of any size within the spell's area from being affected. If you cast this spell over 8 hours, you enrich the land. All plants in a half-mile radius centered on a point within range become enriched for 1 year. The plants yield twice the normal amount of food when harvested. 	f	1 action or 8 hours	{V,S}		150 feet	\N	3	Instantaneous	Transmutation
88	2016-05-28 16:48:07.897615-04	2016-05-28 16:48:07.897847-04	Protection from Energy	For the duration, the willing creature you touch has resistance to one damage type of your choice - acid, cold, fire, lightning, or thunder.	t	1 action	{V,S}		Touch	\N	3	up to 1 hour	Abjuration
89	2016-05-28 16:48:07.898769-04	2016-05-28 16:48:07.898985-04	Tongues	This spell grants the creature you touch the ability to understand any spoken language it hears. Moreover, when the target speaks, any creature that knows at least one language and can hear the target understands what it says.	f	1 action	{V,M}	a small clay model of a ziggurat	Touch	\N	3	1 hour	Divination
90	2016-05-28 16:48:07.899775-04	2016-05-28 16:48:07.899973-04	Vampiric Touch	The touch of your shadow-wreathed hand can siphon force from others to heal your wounds. Make a melee spell attack against a creature within your reach. On a hit, the target takes 3d6 necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt. Until the spell ends, you can make the attack again on each of your turns as an action.\n At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd. 	t	1 action	{V,S}		Self	\N	3	up to 1 minute	Necromancy
91	2016-05-28 16:48:07.900731-04	2016-05-28 16:48:07.90092-04	Spirit Guardians	You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish.\n When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creature's speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a Wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil). On a successful save, the creature takes half as much damage. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd. 	t	1 action	{V,S,M}	a holy symbol	Self (15-foot-radius)	\N	3	up to 10 minutes	Conjuration
92	2016-05-28 16:48:07.901699-04	2016-05-28 16:48:07.90188-04	Water Walk (ritual)	This spell grants the ability to move across any liquid surface - such as water, acid, mud, snow, quicksand, or lava - as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). Up to ten willing creatures you can see within range gain this ability for the duration.\n If your target a creature submerged in a liquid, the spell carries the target to the surface of the liquid at a rate of 60 feet per round. 	f	1 action	{V,S,M}	a piece of cork	30 feet	\N	3	1 hour	Transmutation
93	2016-05-28 16:48:07.902627-04	2016-05-28 16:48:07.902806-04	Banishment	You attempt to send one creature that you can see within range to another place of existence. The target must succeed on a Charisma saving throw or be banished.\n If the target is native to the plane of existence you're on, you banish the target to a harmless demiplane. While there, the target is incapacitated. The target remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. If the target is native to a different plane of existence that the one you're on, the target is banished with a faint popping noise, returning to its home plane. If the spell ends before 1 minute has passed, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. Otherwise, the target doesn't return. At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. 	t	1 action	{V,S,M}	an item distasteful to the target	60 feet	\N	4	up to 1 minute	Abjuration
94	2016-05-28 16:48:07.903599-04	2016-05-28 16:48:07.90378-04	Death Ward	You touch a creature and grant it a measure of protection from death. The first time the target would drop to 0 hit points as a result of taking damage, the target instead drops to 1 hit point, and the spell ends. If the spell is still in effect when the target is subjected to an effect that would kill it instantaneously without dealing damage, that effect is instead negated against the target, and the spells ends.	f	1 action	{V,S}		Touch	\N	4	8 hours	Abjuration
95	2016-05-28 16:48:07.904491-04	2016-05-28 16:48:07.904667-04	Blight	Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a Constitution saving throw. The target takes 8d8 necrotic damage on a failed save, or half as much damage on a successful one. This spell has no effect on undead or constructs.\n If you target a plant creature or a magical plant, it makes the saving throw with disadvantage, and the spell deals maximum damage to it. If you target a nonmagical plant that isn't a creature, such as a tree or shrub, it doesn't make a saving throw, it simply withers and dies. At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th. 	f	1 action	{V,S}		30 feet	\N	4	Instantaneous	Necromancy
96	2016-05-28 16:48:07.905396-04	2016-05-28 16:48:07.905659-04	Booming Blade	As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and it becomes sheathed in booming energy until the start of your next turn. If the target willinglsy moves before then, it immediately takes 1d8 thunder damage, and the spell ends.\n This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 thunder damage to the target, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level.	f	1 action	{V,M}	a weapon	5 feet	\N	0	1 round	Evocation
97	2016-05-28 16:48:07.906473-04	2016-05-28 16:48:07.906666-04	Dimension Door	You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as 200 feet straight downward or upward to the northwest at a 45-degree angle, 300 feet.\n You can bring along objects as long as their weight doesn't exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell. If you would arrive in a place already occupied by an object or a creature, you and any creature traveling with you each take 4d6 force damage, and the spell fails to teleport you. 	f	1 action	{V}		500 feet	\N	4	Instantaneous	Conjuration
98	2016-05-28 16:48:07.907451-04	2016-05-28 16:48:07.907874-04	Feather Fall	Reaction - When you or a creature within 60 feet of you falls Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.	f	1 reaction	{V,M}	a white feather or the heart of a hen	60 feet	\N	1	1 minute	Transmutation
99	2016-05-28 16:48:07.909209-04	2016-05-28 16:48:07.909425-04	Divination (ritual)	Your magic and an offering put you in contact with a god or a god's servants. You ask a single question concerning a specific goal, event, or activity to occur within 7 days. The DM offers a truthful reply. The reply might be a short phrase, a cryptic rhyme, or an omen.\n The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion. If you cast this spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret. 	f	1 action	{V,S,M}	incense and a sacrificial offering appropriate to your religion, together worth at least 25 gp, which the spell consumes	Self	\N	4	Instantaneous	Divination
100	2016-05-28 16:48:07.91028-04	2016-05-28 16:48:07.910465-04	Expeditious Retreat	This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action.	t	1 bonus action	{V,S}		Self	\N	1	up to 10 minutes	Transmutation
101	2016-05-28 16:48:07.911185-04	2016-05-28 16:48:07.911362-04	Silent Image	You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual, it isn't accompanied by sound, smell, or other sensory effects.\n You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image. 	t	1 action	{V,S,M}	a bit of fleece	60 feet	\N	1	up to 10 minute	Illusion
102	2016-05-28 16:48:07.912114-04	2016-05-28 16:48:07.912318-04	Freedom of Movement	You touch a willing creature. For the duration, the target's movement is unaffected by difficult terrain, and spells and other magical effects can neither reduce the target's speed nor cause the target to be paralyzed or restrained.\n The target can also spend 5 feet of movement to automatically escape from nonmagical restraints, such as manacles or a creature that has it grappled. Finally, being underwater imposes no penalties on the target's movement or attacks. 	f	1 action	{V,S,M}	a leather strap, bound around the arm or a similar appendage	Touch	\N	4	1 hour	Abjuration
103	2016-05-28 16:48:07.913047-04	2016-05-28 16:48:07.913229-04	Stone Shape	You touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape that suits your purpose. So, for example, you could shape a large rock into a weapon, idol, or coffer, or make a small passage through a wall, as long as the wall is less than 5 feet thick. You could also shape a stone door or its frame to seal the door shut. The object you create can have up to two hinges and a latch, but finer mechanical detail isn't possible.	f	1 action	{V,S,M}	soft clay, which must be worked into roughly the desired shape of the stone object	Touch	\N	4	Instantaneous	Transmutation
104	2016-05-28 16:48:07.914018-04	2016-05-28 16:48:07.914195-04	Locate Creature	Describe or name a creature that is familiar to you. You sense the direction to the creature's location, as long as that creature is within 1,000 feet of you. If the creature is moving, you know the direction of its movement.\n The spell can locate a specific creature known to you, or the nearest creature of a specific kind (such as a human or a unicorn), so long as you have seen such a creature up close - within 30 feet - at least once. If the creature you described or named is in a different form, such as being under the effects of a polymorph spell, this spell doesn't locate the creature. This spell can't locate a creature if running water at least 10 feet wide blocks a direct path between you and the creature. 	t	1 action	{V,S,M}	a bit of fur from a bloodhound	Self	\N	4	up to 1 hour	Divination
105	2016-05-28 16:48:07.91493-04	2016-05-28 16:48:07.915105-04	Stoneskin	This spell turns the flesh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, and slashing damage.	t	1 action	{V,S,M}	diamond dust worth 100 gp, which the spell consumes	Touch	\N	4	up to 1 hour	Abjuration
106	2016-05-28 16:48:07.915918-04	2016-05-28 16:48:07.916113-04	Holy Aura	(a tiny reliquary worth at least 1,000 gp containing a sacred relic, such as a scrap of cloth from a saint's robe or a piece of parchment from a religious text)Divine light washes out from you and coalesces in a soft radiance in a 30-foot radius around you. Creatures of your choice in that radius when you cast this spell shed dim light in a 5-foot radius and have advantage on all saving throws, and other creatures have disadvantage on attack rolls against them until the spell ends. In addition, when a fiend or an undead hits an affected creature with a melee attack, the aura flashes with brilliant light. The attacker must succeed on a Constitution saving throw or be blinded until the spell ends.	t	1 action	{V,S,M}		Self	\N	8	up to 1 minute	Abjuration
107	2016-05-28 16:48:07.916877-04	2016-05-28 16:48:07.917222-04	Prestidigitation	This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range.\n • You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor. • You instantaneously light or snuff out a candle, a torch, or a small campfire. • You instantaneously clean or soil an object no larger than 1 cubic foot. • You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour. • You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour. • You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action. 	f	1 action	{V,S}		10 feet	\N	0	1 hour	Transmutation
108	2016-05-28 16:48:07.918339-04	2016-05-28 16:48:07.918577-04	Ray of Frost	A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.\n The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8). 	f	1 action	{V,S}		60 feet	\N	0	Instantaneous	Evocation
109	2016-05-28 16:48:07.919345-04	2016-05-28 16:48:07.919533-04	Cloudkill	You create a 20-foot-radius sphere of poisonous, yellow-green fog centered on a point you choose within range. The fog spreads around corners. It lasts for the duration or until strong wind disperses the fog, ending the spell. Its area is heavily obscured.\n When a creature enters the spell's area for the first time on a turn or starts its turn there, that creature must make a Constitution saving throw. The creature takes 5d8 poison damage on a failed save, or half as much damage on a successful one. Creatures are affected even if they hold their breath or don't need to breathe. The fog moves 10 feet away from you at the start of each of your turns, rolling along the surface of the ground. The vapors, being heavier than air, sink to the lowest level of the land, even pouring down openings. At Higher Levels: When you cast this spell using a spell slot of or higher, the damage increases by 1d8 for each slot level above 5th. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 5th. 	t	1 action	{V,S}		120 feet	\N	5	up to 10 minutes	Conjuration
110	2016-05-28 16:48:07.920279-04	2016-05-28 16:48:07.920469-04	Mass Cure Wounds	A wave of healing energy washes out from a point of your choice within range. Choose up to six creatures in a 30-foot-radius sphere centered on that point. Each target regains hit points equal to 3d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.\n At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the healing increases by 1d8 for each slot level above 5th. 	f	1 action	{V,S}		60 feet	\N	5	Instantaneous	Evocation
111	2016-05-28 16:48:07.921192-04	2016-05-28 16:48:07.921374-04	Friends	For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM's discretion), depending on the nature of your interaction with it.	t	1 action	{S,M}		Self	\N	0	up to 1 minute	Enchantment
112	2016-05-28 16:48:07.922144-04	2016-05-28 16:48:07.922323-04	Mage Hand	A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.\n You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it. The hand can't attack, activate magical items, or carry more than 10 pounds. 	f	1 action	{V,S}		30 feet	\N	0	1 minute	Conjuration
190	2016-05-28 16:48:07.994512-04	2016-05-28 16:48:07.994684-04	Water Breathing (ritual)	This spell grants up to ten willing creatures you can see within range the ability to breathe underwater until the spell ends. Affected creatures also retain their normal mode of respiration.	f	1 action	{V,S,M}	a short reed or piece of straw	30 feet	\N	3	24 hours	Transmutation
113	2016-05-28 16:48:07.923047-04	2016-05-28 16:48:07.923227-04	Commune (ritual)	You contact your deity or a divine proxy and ask up to three questions that can be answered with a yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question.\n Divine beings aren't necessarily omniscient, so you might receive "unclear" as an answer if a question pertains to information that lies beyond the deity's knowledge. In a case where a one-word answer could be misleading or contrary to the deity's interests, the DM might offer a short phrase as an answer instead. If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer. The DM makes this roll in secret. 	f	1 minute	{V,S,M}	incense and a vial of holy or unholy water	Self	\N	5	1 minute	Divination
114	2016-05-28 16:48:07.924057-04	2016-05-28 16:48:07.924246-04	Antilife Shell	A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs.\n The barrier lasts for the duration. The barrier prevents an affected creature from passing or reaching through. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier. If you move so that an affect creature is forced to pass through the barrier, the spell ends. 	t	1 action	{V,S}		Self (10-foot radius)	\N	5	up to 1 hour	Abjuration
115	2016-05-28 16:48:07.924973-04	2016-05-28 16:48:07.925157-04	Poison Spray	You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage.\n This spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17 level (4d12). 	f	1 action	{V,S}		10 feet	\N	0	Instantaneous	Conjuration
116	2016-05-28 16:48:07.925884-04	2016-05-28 16:48:07.926054-04	True Strike	You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended.	t	1 action	{S}		30 feet	\N	0	up to 1 round	Divination
117	2016-05-28 16:48:07.926754-04	2016-05-28 16:48:07.926931-04	Shocking Grasp	Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn.\n The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8). 	f	1 action	{V,S}		Touch	\N	0	Instantaneous	Evocation
118	2016-05-28 16:48:07.927611-04	2016-05-28 16:48:07.927784-04	Destructive Wave	You strike the ground, creating a burst of divine energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take 5d6 thunder damage, as well as 5d6 radiant or necrotic damage (your choice), and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn't knocked prone.	f	1 action	{V}		Self (30-foot radius)	\N	5	Instantaneous	Evocation
119	2016-05-28 16:48:07.928543-04	2016-05-28 16:48:07.928736-04	Message	You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.\n You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings. 	f	1 action	{V,S,M}	a short piece of copper wire	120 feet	\N	0	1 round	Transmutation
120	2016-05-28 16:48:07.929467-04	2016-05-28 16:48:07.929648-04	Control Flames	You choose nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways.	f	1 action	{S}		60 feet	\N	0	Instantaneous	Transmutation
121	2016-05-28 16:48:07.930302-04	2016-05-28 16:48:07.930472-04	Dispel Evil and Good	Shimmering energy surrounds and protects you from fey, undead, and creatures originating from beyond the Material Plane. For the duration, celestials, elementals, fey, fiends, and undead have disadvantage on attack rolls against you. You can end the spell early by using either of the following special functions.\n Break Enchantment: As your action, you touch a creature you can reach that is charmed, frightened, or possessed by a celestial, an elemental, a fey, a fiend, or an undead. The creature you touch is no longer charmed, frightened, or possessed by such creatures. Dismissal: As your action, make a melee spell attack against a celestial, an elemental, a fey, a fiend, or an undead you can reach. On a hit, you attempt to drive the creature back to its home plane. The creature must succeed on a Charisma saving throw or be sent back to its home plane (if it isn't there already). If they aren't on their home plane, undead are sent to the Shadowfell, and fey are sent to the Feywild. 	t	1 action	{V,S,M}	holy water or powdered silver and iron	Self	\N	5	up to 1 minute	Abjuration
122	2016-05-28 16:48:07.931201-04	2016-05-28 16:48:07.931391-04	Hallow	You touch a point and infuse an area around it with holy (or unholy) power. The area can have a radius up to 60 feet, and the spell fails if the radius includes an area already under the effect a hallow spell. The affected area is subject to the following effects.\n First, celestials, elementals, fey, fiends, and undead can't enter the area, nor can such creatures charm, frighten, or possess creatures within it. Any creature charmed, frightened, or possessed by such a creature is no longer charmed, frightened, or possessed upon entering the area. You can exclude one or more of those types of creatures from this effect. Second, you can bind an extra effect to the area. Choose the effect from the following list, or choose an effect offered by the DM. Some of these effects apply to creatures in the area, you can designate whether the effect applies to all creatures, creatures that follow a specific deity or leader, or creatures of a specific sort, such as ores or trolls. When a creature that would be affected enters the spell's area for the first time on a turn or starts its turn there, it can make a Charisma saving throw. On a success, the creature ignores the extra effect until it leaves the area. Courage: Affected creatures can't be frightened while in the area. Darkness: Darkness fills the area. Normal light, as well as magical light created by spells of a lower level than the slot you used to cast this spell, can't illuminate the area. Daylight: Bright light fills the area. Magical darkness created by spells of a lower level than the slot you used to cast this spell can't extinguish the light. Energy Protection: Affected creatures in the area have resistance to one damage type of your choice, except for bludgeoning, piercing, or slashing. Energy Vulnerability: Affected creatures in the area have vulnerability to one damage type of your choice, except for bludgeoning, piercing, or slashing. Everlasting Rest: Dead bodies interred in the area can't be turned into undead. Extradimensional Interference: Affected creatures can't move or travel using teleportation or by extradimensional or interplanar means. Fear: Affected creatures are frightened while in the area. Silence: No sound can emanate from within the area, and no sound can reach into it. Tongues: Affected creatures can communicate with any other creature in the area, even if they don't share a common language. 	f	24 hours	{V,S,M}	herbs, oils, and incense worth at least 1,000 gp, which the spell consumes	Touch	\N	5		Evocation
189	2016-05-28 16:48:07.993689-04	2016-05-28 16:48:07.993861-04	Absorb Elements	The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.	f	1 reaction, which you take when you take acid, cold, fire, lightning, or thunder damage	{S}		Self	\N	1	1 round	Abjuration
123	2016-05-28 16:48:07.932455-04	2016-05-28 16:48:07.932704-04	Flame Strike	A vertical column of divine fire roars down from the heavens in a location you specify. Each creature in a 10-foot radius, 40-foot-high cylinder centered on a point within range must make a Dexterity saving throw. A creature takes 4d6 fire damage and 4d6 radiant damage on a failed save, or half as much damage on a successful one.\n At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the fire damage or the radiant damage (your choice) increases by 1d6 for each slot level above 5th. 	f	1 action	{V,S,M}	pinch of sulfur	60 feet	\N	5	Instantaneous	Evocation
124	2016-05-28 16:48:07.933581-04	2016-05-28 16:48:07.933773-04	Greater Restoration	You imbue a creature you touch with positive energy to undo a debilitating effect. You can reduce the target's exhaustion level by one, or end one of the following effects on the target.\n • One effect that charmed or petrified the target • One curse, including the target's attunement to a cursed magic item • Any reduction to one of the target's ability scores • One effect reducing the target's hit point maximum 	f	1 action	{V,S,M}	diamond dust worth 100 gp, which the spell consumes	Touch	\N	5	Instantaneous	Abjuration
125	2016-05-28 16:48:07.934481-04	2016-05-28 16:48:07.934655-04	Create Bonfire	You create a bonfire on ground that you can see within range. Until the spells ends, the bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it enters the bonfire's space for the first time on a turn or ends its turn there.	t	1 action	{V,S}		60 feet	\N	0	up to 1 minute	Conjuration
126	2016-05-28 16:48:07.935452-04	2016-05-28 16:48:07.935636-04	Divine Word	You utter a divine word, imbued with the power that shaped the world at the dawn of creation. Choose any number of creatures you can see within range. Each creature that can hear you must make a Charisma saving throw. On a failed save, a creature suffers an effect based on its current hit points.\n • 50 hit points or fewer - deafened for 1 minute • 40 hit points or fewer - deafened and blinded for 10 minutes • 30 hit points or fewer - blinded, deafened, and stunned for 1 hour • 20 hit points or fewer - killed instantly Regardless of its current hit points, a celestial, an elemental, a fey, or a fiend that fails its save is forced back to its plane of origin (if it isn't there already) and can't return to your current plane for 24 hours by any means short of a wish spell. 	f	1 bonus action	{V}		30 feet	\N	7	Instantaneous	Evocation
127	2016-05-28 16:48:07.936357-04	2016-05-28 16:48:07.936534-04	Frostbite	You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn.	f	1 action	{V,S}		60 feet	\N	0	Instantaneous	Evocation
128	2016-05-28 16:48:07.937223-04	2016-05-28 16:48:07.937402-04	Gust	You seize the air and compel it to create one of the following effects at a point you can see within range.	f	1 action	{V,S}		30 feet	\N	0	Instantaneous	Transmutation
129	2016-05-28 16:48:07.938088-04	2016-05-28 16:48:07.938264-04	Mold Earth	You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways.	f	1 action	{S}		30 feet	\N	0	Instantaneous	Transmutation
130	2016-05-28 16:48:07.938924-04	2016-05-28 16:48:07.939096-04	Thunderclap	You create a burst of thunderous sound, which can be heard 100 feet away. Each creature other than you within 5 feet of you must make a Constitution saving throw. On a failed save, the creature takes 1d6 thunder damage.	f	1 action	{S}		Self (5-foot radius)	\N	0	Instantaneous	Evocation
131	2016-05-28 16:48:07.939802-04	2016-05-28 16:48:07.939988-04	Raise Dead	You return a dead creature you touch to life, provided that it has been dead no longer than 10 days. If the creature's soul is both willing and at liberty to rejoin the body, the creature returns to life with 1 hit point.\n This spell also neutralizes any poison and cures nonmagical diseases that affected the creature at the time it died. This spell doesn't, however, remove magical diseases, curses, or similar effects, if these aren't first removed prior to casting the spell, they take effect when the creature returns to life. The spell can't return an undead creature to life. This spell closes all mortal wounds, but it doesn't restore missing body parts. If the creature is lacking body parts or organs integral for its survival - its head, for instance - the spell automatically fails. Coming back from the dead is an ordeal. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears. 	f	1 hour	{V,S,M}	a diamond worth at least 500 gp, which the spell consumes	Touch	\N	5	Instantaneous	Necromancy
132	2016-05-28 16:48:07.940876-04	2016-05-28 16:48:07.941081-04	Shape Water	You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways.	f	1 action	{S}		30 feet	\N	0	Instantaneous	Transmutation
133	2016-05-28 16:48:07.941809-04	2016-05-28 16:48:07.942016-04	Blade Barrier	You create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is difficult terrain.\n When a creature enters the wall's area for the first time on a turn or starts its turn there, the creature must make a Dexterity saving throw. On a failed save, the creature takes 6d10 slashing damage. On a successful save, the creature takes half as much damage. 	t	1 action	{V,S}		90 feet	\N	6	up to 10 minutes	Evocation
134	2016-05-28 16:48:07.942737-04	2016-05-28 16:48:07.942914-04	Teleportation Circle	As you cast the spell, you draw a 10-foot-diameter circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice whose sigil sequence you know and that is on the same plane of existence as you. A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 5 feet of the destination circle or in the nearest unoccupied space if that space is occupied.\n Many major temples, guilds, and other important places have permanent teleportation circles inscribed somewhere within their confines. Each such circle includes a unique sigil sequence - a string of magical runes arranged in a particular pattern. When you first gain the ability to cast this spell, you learn the sigil sequences for two destinations on the Material Plane, determined by the DM. You can learn additional sigil sequences during your adventures. You can commit a new sigil sequence to memory after studying it for 1 minute. You can create a permanent teleportation circle by casting this spell in the same location every day for one year. You need not use the circle to teleport when you cast the spell in this way. 	f	1 minute	{V,M}	rare chalks and inks infused with precious gems with 50 gp, which the spell consumes	10 feet	\N	5	1 round	Conjuration
135	2016-05-28 16:48:07.943601-04	2016-05-28 16:48:07.943774-04	Tree Stride	You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 500 feet. Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter a tree. You instantly know the location of all other trees of the same kind within 500 feet and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree you're in. You appear in a spot of your choice within 5 feet of the destination tree, using another 5 feet of movement. If you have no movement left, you appear within 5 feet of the tree you entered.\n You can use this transportation ability once per round for the duration. You must end each turn outside a tree. 	t	1 action	{V,S}		Self	\N	5	up to 1 minute	Conjuration
136	2016-05-28 16:48:07.944481-04	2016-05-28 16:48:07.94466-04	Forbiddance (ritual)	You create a ward against magical travel that protects up to 40,000 square feet of floor space to a height of 30 feet above the floor. For the duration, creatures can't teleport into the area or use portals, such as those created by the gate spell, to enter the area. The spell proofs the area against planar travel, and therefore prevents creatures from accessing the area by way of the Astral Plane, Ethereal Plane, Feywild, Shadowfell, or the plane shift spell.\n In addition, the spell damages types of creatures that you choose when you cast it. Choose one or more of the following - celestials, elementals, fey, fiends, and undead. When a chosen creature enters the spell's area for the first time on a turn or starts its turn there, the creature takes 5d10 radiant or necrotic damage (your choice when you cast this spell). When you cast this spell, you can designate a password. A creature that speaks the password as it enters the area takes no damage from the spell. The spell's area can't overlap with the area of another forbiddance spell. If you cast forbiddance every day for 30 days in the same location, the spell lasts until it is dispelled, and the material components are consumed on the last casting. 	f	10 minutes	{V,S,M}	a sprinkling of holy water, rare incense, and powdered ruby worth at least 1,000 gp	Touch	\N	6	1 day	Abjuration
137	2016-05-28 16:48:07.945355-04	2016-05-28 16:48:07.945536-04	Harm	You unleash a virulent disease on a creature that you can see within range. The target must make a Constitution saving throw. On a failed save, it takes 14d6 necrotic damage, or half as much damage on a successful save. The damage can't reduce the target's hit points below 1. If the target fails the saving throw, its hit point maximum is reduced for 1 hour by an amount equal to the necrotic damage it took. Any effect that removes a disease allows a creature's hit point maximum to return to normal before that time passes.	f	1 action	{V,S}		60 feet	\N	6	Instantaneous	Necromancy
138	2016-05-28 16:48:07.946348-04	2016-05-28 16:48:07.946547-04	Find the Path	(a set of divinatory tools - such as bones, ivory sticks, cards, teeth, or carved runes - worth 100 gp and an object from the location you wish to find)This spell allows you to find the shortest, most direct physical route to a specific fixed location that you are familiar with on the same plane of existence. If you name a destination on another plan of existence, a destination that moves (such as a mobile fortress), or a destination that isn't specific (such as a green dragon's lair), the spell fails.\n For the duration, as long as you are on the same plane of existence as the destination, you know how far it is and in what direction it lies. While you are traveling there, whenever you are presented with a choice of paths along the way, you automatically determine which path is the shortest and most direct route (but not necessarily the safest route) to the destination. 	t	1 minute	{V,S,M}		Self	\N	6	up to 1 day	Divination
139	2016-05-28 16:48:07.94727-04	2016-05-28 16:48:07.947445-04	Heal	Choose a creature that you can see within range. A surge of positive energy washes through the creature, causing it to regain 70 hit points. The spell also ends blindness, deafness, and any diseases affecting the target. This spell has no effect on constructs or undead.\n At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, the amount of healing increases by 10 for each slot level above 6th. 	f	1 action	{V,S}		60 feet	\N	6	Instantaneous	Evocation
140	2016-05-28 16:48:07.948272-04	2016-05-28 16:48:07.948471-04	Heroes' Feast	(a gem-encrusted bowl worth at least 1,000 gp, which the spell consumes)You bring forth a great feast, including magnificent food and drink. The feast takes 1 hour to consume and disappears at the end of that time, and the beneficial effects don't set in until this hour is over. Up to twelve other creatures can partake of the feast.\n A creature that partakes of the feast gains several benefits. The creature is cured of all diseases and poison, becomes immune to poison and being frightened, and makes all Wisdom saving throws with advantage. Its hit point maximum also increases by 2d10, and it gains the same number of hit points. These benefits last for 24 hours. 	f	10 minutes	{V,S,M}		30 feet	\N	6	Instantaneous	Conjuration
141	2016-05-28 16:48:07.949236-04	2016-05-28 16:48:07.949426-04	Planar Ally	You beseech an otherworldly entity for aid. The being must be known to you - a god, a primordial, a demon prince, or some other being of cosmic power. That entity sends a celestial, an elemental, or a fiend loyal to it to aid you, making the creature appear in an unoccupied space within range. If you know a specific creature's name, you can speak that name when you cast this spell to request that creature, though you might get a different creature anyway (DM's choice).\n When the creature appears, it is under no compulsion to behave in any particular way. You can ask the creature to perform a service in exchange for payment, but it isn't obliged to do so. The requested task could range from simple (fly us across the chasm, or help us fight a battle) to complex (spy on our enemies, or protect us during our foray into the dungeon). You must be able to communicate with the creature to bargain for its services. Payment can take a variety of forms. A celestial might require a sizable donation of gold or magic items to an allied temple, while a fiend might demand a living sacrifice or a gift of treasure. Some creatures might exchange their service for a quest undertaken by you. As a rule of thumb, a task that can be measured in minutes requires a payment worth 100 gp per minute. A task measured in hours requires 1,000 gp per hour. And a task measured in days (up to 10 days) requires 10,000 gp per day. The DM can adjust these payments based on the circumstances under which you cast the spell. If the task is aligned with the creature's ethos, the payment might be halved or even waived. Nonhazardous tasks typically require only half the suggested payment, while especially dangerous tasks might require a greater gift. Creatures rarely accept tasks that seem suicidal. After the creature completes the task, or when the agreed-upon duration of service expires, the creature returns to its home plane after reporting back to you, if appropriate to the task and if possible. If you are unable to agree on a price for the creature's service, the creature immediately returns to its home plane. A creature enlisted to join your group counts as a member of it, receiving a full share of experience points awarded. 	f	10 minutes	{V,S}		60 feet	\N	6	Instantaneous	Conjuration
142	2016-05-28 16:48:07.950226-04	2016-05-28 16:48:07.95041-04	Word of Recall	You and up to five willing creatures within 5 feet of you instantly teleport to a previously designated sanctuary. You and any creatures that teleport with you appear in the nearest unoccupied space to the spot you designated when you prepared your sanctuary (see below). If you cast this spell without first preparing a sanctuary, the spell has no effect.\n You must designate a sanctuary by casting this spell within a location, such as a temple, dedicated to or strongly linked to your deity. If you attempt to cast the spell in this manner in an area that isn't dedicated to your deity, the spell has no effect. 	f	1 action	{V,S,M}		5 feet	\N	6	Instantaneous	Conjuration
143	2016-05-28 16:48:07.95113-04	2016-05-28 16:48:07.951305-04	Conjure Celestial	You summon a celestial of challenge rating 4 or lower, which appears in an unoccupied space that you can see within range. The celestial disappears when it drops to 0 hit points or when the spell ends.\n The celestial is friendly to you and your companions for the duration. Roll initiative for the celestial, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don't violate its alignment. If you don't issue any commands to the celestial, it defends itself from hostile creatures but otherwise takes no actions The DM has the celestial's statistics. At Higher Levels: When you cast this spell using a 9th-level spell slot, you summon a celestial of challenge rating 5 or lower. 	t	1 minute	{V,S}		90 feet	\N	7	up to 1 hour	Conjuration
144	2016-05-28 16:48:07.952069-04	2016-05-28 16:48:07.952309-04	True Seeing	This spell gives the willing creature you touch the ability to see things as they actually are. For the duration, the creature has truesight, notices secret doors hidden by magic, and can see into the Ethereal Plane, all out to a range of 120 feet.	f	1 action	{V,S,M}	an ointment for the eyes that costs 25 gp, is made from mushroom powder, saffron, and fat, and is consumed by the spell	Touch	\N	6	1 hour	Divination
145	2016-05-28 16:48:07.953133-04	2016-05-28 16:48:07.953355-04	Aganazzar's Scorcher	(a red dragon's scale)A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one.	f	1 action	{V,S,M}		30 feet	\N	2	Instantaneous	Evocation
146	2016-05-28 16:48:07.954318-04	2016-05-28 16:48:07.954525-04	Fire Storm	A storm made up of sheets of roaring flame appears in a location you choose within range. The area of the storm consists of up to ten 10-foot cubes, which you can arrange as you wish. Each cube must have at least one face adjacent to the face of another cube. Each creature in the area must make Dexterity saving throw. It takes 7d10 fire damage on a failed save, or half as much damage on a successful one.\n The fire damages objects in the area and ignites flammable objects that aren't being worn or carried. If you choose, plant life in the area is unaffected by this spell. 	f	1 action	{V,S}		150 feet	\N	7	Instantaneous	Evocation
147	2016-05-28 16:48:07.95527-04	2016-05-28 16:48:07.955449-04	Regenerate	You touch a creature and stimulate its natural healing ability. The target regains 4d8 + 15 hit points. For the duration of the spell, the target regains 1 hit point at the start of each of its turns (10 hit points each minute).\n The target's severed body members (fingers, legs, tails, and so on), if any, are restored after 2 minutes. If you have the severed part and hold it to the stump, the spell instantaneously causes the limb to knit to the stump. 	f	1 minute	{V,S,M}	a prayer wheel and holy water	Touch	\N	7	1 hour	Transmutation
148	2016-05-28 16:48:07.956143-04	2016-05-28 16:48:07.956326-04	Symbol	When you cast this spell, you inscribe a harmful glyph either on a surface (such as a section of floor, a wall, or a table) or within an object that can be closed to conceal the glyph (such as a book, a scroll, or a treasure chest). If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place, if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.\n The glyph is nearly invisible, requiring an Intelligence (Investigation) check against your spell save DC to find it. You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or stepping on the glyph, removing another object covering it, approaching within a certain distance of it, or manipulating the object that holds it. For glyphs inscribed within an object, the most common triggers are opening the object, approaching within a certain distance of it, or seeing or reading the glyph. You can further refine the trigger so the spell is activated only under certain circumstances or according to a creature's physical characteristics (such as height or weight), or physical kind (for example, the ward could be set to affect hags or shapechangers). You can also specify creatures that don't trigger the glyph, such as those who say a certain password. When you inscribe the glyph, choose one of the options below for its effect. Once triggered, the glyph glows, filling a 60-foot-radius sphere with dim light for 10 minutes, after which time the spell ends. Each creature in the sphere when the glyph activates is targeted by its effect, as is a creature that enters the sphere for the first time on a turn or ends its turn there. Death: Each target must make a Constitution saving throw, taking 10d10 necrotic damage on a failed save, or half as much damage on a successful save. Discord: Each target must make a Constitution saving throw. On a failed save, a target bickers and argues with other creatures for 1 minute. During this time, it is incapable of meaningful communication and has disadvantage on attack rolls and ability checks. Fear: Each target must make a Wisdom saving throw and becomes frightened for 1 minute on a failed save. While frightened, the target drops whatever it is holding and must move at least 30 feet away from the glyph on each of its turns, if able. Hopelessness: Each target must make a Charisma saving throw. On a failed save, the target is overwhelmed with despair for 1 minute. During this time, it can't attack or target any creature with harmful abilities, spells, or other magical effects. Insanity: Each target must make an Intelligence saving throw. On a failed save, the target is driven insane for 1 minute. An insane creature can't take actions, can't understand what other creatures say, can't read, and speaks only in gibberish. The DM controls its movement, which is erratic. Pain: Each target must make a Constitution saving throw and becomes incapacitated with excruciating pain for 1 minute on a failed save. Sleep: Each target must make a Wisdom saving throw and falls unconscious for 10 minutes on a failed save. A creature awakens if it takes damage or if someone uses an action to shake or slap it awake. Stunning: Each target must make a Wisdom saving throw and becomes stunned for 1 minute on a failed save. 	f	1 minute	{V,S,M}	mercury, phosphorus, and powdered diamond and opal with a total value of at least 1,000 gp, which the spell consumes	Touch	\N	7		Abjuration
149	2016-05-28 16:48:07.957415-04	2016-05-28 16:48:07.957615-04	Earthquake	You create a seismic disturbance at a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot- radius circle centered on that point and shakes creatures and structures in contact with the ground in that area.\n The ground in the area becomes difficult terrain. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creature's concentration is broken. When you cast this spell and at the end of each turn you spend concentrating on it, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked prone. This spell can have additional effects depending on the terrain in the area, as determined by the DM. Fissures. Fissures open throughout the spell's area at the start of your next turn after you cast the spell. A total of 1d6 such fissures open in locations chosen by the DM. Each is 1d10 x 10 feet deep, 10 feet wide, and extends from one edge of the spell's area to the opposite side. A creature standing on a spot where a fissure opens must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure's edge as it opens. A fissure that opens beneath a structure causes it to automatically collapse (see below). Structures. The tremor deals 50 bludgeoning damage to any structure in contact with the ground in the area when you cast the spell and at the start of each of your turns until the spell ends. If a structure drops to 0 hit points, it collapses and potentially damages nearby creatures. A creature within half the distance of a structure's height must make a Dexterity saving throw. On a failed save, the creature takes 5d6 bludgeoning damage, is knocked prone, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. The DM can adjust the DC higher or lower, depending on the nature of the rubble. On a successful save, the creature takes half as much damage and doesn't fall prone or become buried. 	t	1 action	{V,S,M}	a pinch of dirt, a piece of rock, and a lump of clay	500 feet	\N	8	up to 1 minute	Evocation
150	2016-05-28 16:48:07.958486-04	2016-05-28 16:48:07.958675-04	Earthbind	Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw or its flying speed (if any) is reduced to 0 feet for the spell's duration. An airborne creature affected by this spell descends at 60 feet per round until it reaches the ground or the spell ends.	t	1 action	{V}		300 feet	\N	2	up to 1 minute	Transmutation
151	2016-05-28 16:48:07.959388-04	2016-05-28 16:48:07.959576-04	Dust Devil	Choose an unoccupied 5-foot cube of air that you can see within range. An elemental force that resembles a dust devil appears in the cube and lasts for the spell's duration.	t	1 action	{V,S,M}	a pinch of dust	60 feet	\N	2	up to 1 minute	Conjuration
152	2016-05-28 16:48:07.96027-04	2016-05-28 16:48:07.960446-04	Resurrection	You touch a dead creature that has been dead for no more than a century, that didn't die of old age, and that isn't undead. If its soul is free and willing, the target returns to life with all its hit points.\n This spell neutralizes any poisons and cures normal diseases afflicting the creature when it died. It doesn't, however, remove magical diseases, curses, and the like, if such affects aren't removed prior to casting the spell, they afflict the target on its return to life. This spell closes all mortal wounds and restores any missing body parts. Coming back from the dead is an ordeal. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears. Casting this spell to restore life to a creature that has been dead for one year or longer taxes you greatly. Until you finish a long rest, you can't cast spells again, and you have disadvantage on all attack rolls, ability checks, and saving throws. 	f	1 hour	{V,S,M}	a diamond worth at least 1,000 gp, which the spell consumes	Touch	\N	7	Instantaneous	Necromancy
163	2016-05-28 16:48:07.970446-04	2016-05-28 16:48:07.970625-04	Chromatic Orb	You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose. At Higher Levels: When you cast this spell using a spell slot of or higher, the damage increases by 1d8 for each slot level above 1st.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st. 	f	1 action	{V,S,M}	a diamond worth at least 50 gp	90 feet	\N	1	Instantaneous	Evocation
153	2016-05-28 16:48:07.961126-04	2016-05-28 16:48:07.9613-04	Control Weather	You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell. Moving to a place where you don't have a clear path to the sky ends the spell early.\n When you cast the spell, you change the current weather conditions, which are determined by the DM based on the climate and season. You can change precipitation, temperature, and wind. It takes 1d4 x 10 minutes for the new conditions to take effect. Once they do so, you can change the conditions again. When the spell ends, the weather gradually returns to normal. When you change the weather conditions, find a current condition on the following tables and change its stage by one, up or down. When changing the wind, you can change its direction. Precipitation: Stage 1 - Clear Stage 2 - Light clouds Stage 3 - Overcast or ground fog Stage 4 - Rain, hail or snow Stage 5 - Torrential rain, driving hail or blizzard Temperature: Stage 1 - Unbearable heat Stage 2 - Hot Stage 3 - Warm Stage 4 - Cool Stage 5 - Cold Stage 6 - Arctic cold Wind: Stage 1 - Calm Stage 2 - Moderate wind Stage 3 - Strong wind Stage 4 - Gale Stage 5 - Storm 	t	10 minutes	{V,S,M}	burning incense and bits of earth and wood mixed in water	Self (5-mile radius)	\N	8	up to 8 hours	Transmutation
154	2016-05-28 16:48:07.962047-04	2016-05-28 16:48:07.962223-04	True Resurrection	You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. If the creature's soul is free and willing, the creature is restored to life with all its hit points.\n This spell closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses affecting the creature when it died. The spell replaces damaged or missing organs or limbs. The spell can even provide a new body if the original no longer exists, in which case you must speak the creature's name. The creature then appears in an unoccupied space you choose within 10 feet of you. 	f	1 hour	{V,S,M}	a sprinkle of holy water and diamonds worth at least 25,000 gp, which the spell consumes	Touch	\N	9	Instantaneous	Necromancy
155	2016-05-28 16:48:07.962924-04	2016-05-28 16:48:07.963099-04	Blade Ward	You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.	f	1 action	{V,S}		Self	\N	0	1 round	Abjuration
156	2016-05-28 16:48:07.963852-04	2016-05-28 16:48:07.964043-04	Mass Heal	A flood of healing energy flows from you into injured creatures around you. You restore up to 700 hit points, divided as you choose among any number of creatures that you can see within range. Creatures healed by this spell are also cured of all diseases and any effect making them blinded or deafened. This spell has no effect on undead or constructs.	f	1 action	{V,S}		60 feet	\N	9	Instantaneous	Evocation
157	2016-05-28 16:48:07.964939-04	2016-05-28 16:48:07.965138-04	Gate	You conjure a portal linking an unoccupied space you can see within range to a precise location on a different plane of existence. The portal is a circular opening, which you can make 5 to 20 feet in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration.\n The portal has a front and a back on each plane where it appears. Travel through the portal is possible only by moving through its front. Anything that does so is instantly transported to the other plane, appearing in the unoccupied space nearest to the portal. Deities and other planar rulers can prevent portals created by this spell from opening in their presence or anywhere within their domains. When you cast this spell, you can speak the name of a specific creature (a pseudonym, title, or nickname doesn't work). If that creature is on a plane other than the one you are on, the portal opens in the named creature's immediate vicinity and draws the creature through it to the nearest unoccupied space on your side of the portal. You gain no special power over the creature, and it is free to act as the DM deems appropriate. It might leave, attack you, or help you. 	t	1 action	{V,S,M}	a diamond worth at least 5,000 gp	60 feet	\N	9	up to 1 minute	Conjuration
158	2016-05-28 16:48:07.965908-04	2016-05-28 16:48:07.96609-04	Dancing Lights	You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius.\n As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range. 	t	1 action	{V,S,M}		120 feet	\N	0	up to 1 minute	Evocation
159	2016-05-28 16:48:07.966797-04	2016-05-28 16:48:07.966978-04	Chill Touch	You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target.\n If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn. This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8). 	f	1 action	{V,S}		120 feet	\N	0	1 round	Necromancy
160	2016-05-28 16:48:07.967683-04	2016-05-28 16:48:07.967867-04	Acid Splash	You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.\n This spells damage increases by 1d6 when you reach 5th Level (2d6), 11th level (3d6) and 17th level (4d6). 	f	1 action	{V,S}		60 feet	\N	0	Instantaneous	Conjuration
161	2016-05-28 16:48:07.968565-04	2016-05-28 16:48:07.968751-04	Fire Bolt	You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried.\n This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10). 	f	1 action	{V,S}		120 feet	\N	0	Instantaneous	Evocation
162	2016-05-28 16:48:07.969534-04	2016-05-28 16:48:07.969726-04	Comprehend Languages (ritual)	For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface of which the words are written. It takes about 1 minute to read one page of text.\n This spell doesn't decode secret messages in a text or glyph, such as an arcane sigil, that isn't part of a written language. 	f	1 action	{V,S,M}	a pinch of soot and salt	Self	\N	1	1 hour	Divination
176	2016-05-28 16:48:07.982069-04	2016-05-28 16:48:07.982258-04	Skywrite (ritual)	You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spell's duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early.	t	1 action	{V,S}		Sight	\N	2	up to 1 hour	Transmutation
164	2016-05-28 16:48:07.971301-04	2016-05-28 16:48:07.971474-04	Color Spray	A dazzling array of flashing, colored light springs from your hand. Roll 6d10, the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can't see).\n Starting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the spell ends. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for the creature to be affected. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st. 	f	1 action	{V,S,M}	a pinch of powder or sand that is colored red, yellow, and blue	Self (15-foot cone)	\N	1	1 round	Illusion
165	2016-05-28 16:48:07.972217-04	2016-05-28 16:48:07.972398-04	Alarm (ritual)	You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible.\n A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet. 	f	1 minute	{V,S,M}	a tiny bell and a piece of fine silver wire	30 feet	\N	1	8 hours	Abjuration
166	2016-05-28 16:48:07.973118-04	2016-05-28 16:48:07.973302-04	Green-Flame Blade	As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and green fire leaps from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier.\n This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 fire damage to the target, and the fire damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level and 17th level.	f	1 action	{V,M}	a weapon	5 feet	\N	0	1 round	Evocation
167	2016-05-28 16:48:07.97401-04	2016-05-28 16:48:07.97419-04	Lightning Lure	You create a lash of lightning energy that strikes at one creature of your choice that you can see within range. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you.\n The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).	f	1 action	{V}		15 feet	\N	0	Instantaneous	Evocation
168	2016-05-28 16:48:07.974873-04	2016-05-28 16:48:07.975065-04	Sword Burst	You create a momentary circle of spectral blades that sweep around you. Each creature within range, other than you, must succeed on a Dexterity saving throw or take 1d6 force damage.\n The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).	f	1 action	{V}		5 feet	\N	0	Instantaneous	Conjuration
169	2016-05-28 16:48:07.975827-04	2016-05-28 16:48:07.976018-04	Find Familiar (ritual)	You gain the service of a familiar, a spirit that takes an animal form you choose - bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey or fiend (your choice) instead of a beast.\n Your familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal. When the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again. While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses. As an action, you can temporarily dismiss your familiar. It disappears into a pocket dimension where it awaits you summons. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you. You can't have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature. Finally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll. 	f	1 hour	{V,S,M}	10 gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier	10 feet	\N	1	Instantaneous	Conjuration
170	2016-05-28 16:48:07.976755-04	2016-05-28 16:48:07.976931-04	Grease	Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into difficult terrain for the duration.\n When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone. 	f	1 action	{V,S,M}	a bit of pork rind or butter	60 feet	\N	1	1 minute	Conjuration
171	2016-05-28 16:48:07.977607-04	2016-05-28 16:48:07.977779-04	Jump	(a grasshopper's hind leg)You touch a creature. The creature's jump distance is tripled until the spell ends.	f	1 action	{V,S,M}		Touch	\N	1	1 minute	Transmutation
172	2016-05-28 16:48:07.97844-04	2016-05-28 16:48:07.978613-04	Mage Armor	You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends it if the target dons armor or if you dismiss the spell as an action.	f	1 action	{V,S,M}	a piece of cured leather	Touch	\N	1	8 hours	Abjuration
173	2016-05-28 16:48:07.979321-04	2016-05-28 16:48:07.979494-04	Shield	An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.	f	1 reaction	{V,S}		Self	\N	1	1 round	Abjuration
174	2016-05-28 16:48:07.980209-04	2016-05-28 16:48:07.980418-04	Maximilian's Earthen Grasp	You choose a 5-foot-square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches for one creature you can see within 5 feet of it. The target must make a Strength saving throw. On a failed save, the target takes 2d6 bludgeoning damage and is restrained for the spell's duration.	t	1 action	{V,S,M}	a miniature hand sculpted from clay	30 feet	\N	2	up to 1 minute	Transmutation
175	2016-05-28 16:48:07.981185-04	2016-05-28 16:48:07.981366-04	Snilloc's Snowball Swarm	A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes 3d6 cold damage on a failed save, or half as much damage on a successful one.	f	1 action	{V,S,M}	a piece of ice or a small white rock chip	90 feet	\N	2	Instantaneous	Evocation
177	2016-05-28 16:48:07.982979-04	2016-05-28 16:48:07.983162-04	Melf's Minute Meteors	You create six tiny meteors in your space. They float in the air and orbit you for the spell's duration. When you cast the spell-and as a bonus action on each of your turns thereafter-you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you. Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creature within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.	t	1 action	{V,S,M}	niter, sulfur, and pine tar formed into a bead	Self	\N	3	up to 10 minutes	Evocation
178	2016-05-28 16:48:07.983939-04	2016-05-28 16:48:07.984128-04	Pyrotechnics	Choose an area of flame that you can see and that can fit within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke.	f	1 action	{V,S}		60 feet	\N	2	Instantaneous	Transmutation
179	2016-05-28 16:48:07.984805-04	2016-05-28 16:48:07.98498-04	Longstrider	You touch a creature. The target's speed increases by 10 feet until the spell ends.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. 	f	1 action	{V,S,M}	a pinch of dirt	Touch	\N	1	1 hour	Transmutation
180	2016-05-28 16:48:07.985691-04	2016-05-28 16:48:07.985882-04	Stinking Cloud	You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is heavily obscured. The cloud lingers in the air for the duration.\n Each creature that is completely within the cloud at the start of its turn must make a Constitution saving throw against poison. On a failed save, the creature spends its action that turn retching and reeling. Creatures that don't need to breathe or are immune to poison automatically succeed on this saving throw. A moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds. A strong wind (at least 20 miles per hour) disperses it after 1 round. 	t	1 action	{V,S,M}	a rotten egg or several skunk cabbage leaves	90 feet	\N	3	up to 1 minute	Conjuration
181	2016-05-28 16:48:07.986604-04	2016-05-28 16:48:07.986875-04	Tenser's Floating Disk (ritual)	This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.\n The disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. It can more across uneven terrain, up or down stairs, slopes and the like, but it can't cross an elevation change of 10 feet or more. For example, the disk can't move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom. If you move more than 100 feet from the disk (typically because it can't move around an obstacle to follow you), the spell ends. 	f	1 action	{V,S,M}	a drop of mercury	30 feet	\N	1	1 hour	Conjuration
182	2016-05-28 16:48:07.987631-04	2016-05-28 16:48:07.987812-04	Sleep	This spell sends creatures into a magical slumber. Roll 5d8, the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).\n Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected. Undead and creatures immune to being charmed aren't affected by this spell. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st. 	f	1 action	{V,S,M}	a pinch of find sand, rose petals, or a cricket	90 feet	\N	1	1 minute	Enchantment
183	2016-05-28 16:48:07.988499-04	2016-05-28 16:48:07.988672-04	Tasha's Hideous Laughter	A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laugher if this spell affects it. The target must succeed on a Wisdom saving throw of fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn't affected.\n At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target has advantage on the saving throw if it's triggered by damage. On a success, the spell ends. 	t	1 action	{V,S,M}	tiny tarts and a feather that waved in the air	30 feet	\N	1	up to 1 minute	Enchantment
184	2016-05-28 16:48:07.98934-04	2016-05-28 16:48:07.989523-04	Catapult	Choose one object weighing 1 to 5 pounds within range that isn't being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. In either case, both the object and the creature or solid surface take 3d8 bludgeoning damage.	f	1 action	{S}		150 feet	\N	1	Instantaneous	Transmutation
185	2016-05-28 16:48:07.990193-04	2016-05-28 16:48:07.990369-04	Earth Tremor	You cause a tremor in the ground in a 10-foot radius. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared.	f	1 action	{V,S}		Self (10-foot radius)	\N	1	Instantaneous	Evocation
186	2016-05-28 16:48:07.991083-04	2016-05-28 16:48:07.991272-04	Ice Knife	You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of the point where the ice exploded must succeed on a Dexterity saving throw or take 2d6 cold damage.	f	1 action	{S,M}	a drop of water or piece of ice	60 feet	\N	1	Instantaneous	Conjuration
187	2016-05-28 16:48:07.99199-04	2016-05-28 16:48:07.992175-04	Tidal Wave	You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failure, a creature takes 4d8 bludgeoning damage and is knocked prone. On a success, a creature takes half as much damage and isn't knocked prone. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it.	f	1 action	{V,S,M}	a drop of water	120 feet	\N	3	Instantaneous	Conjuration
191	2016-05-28 16:48:07.995336-04	2016-05-28 16:48:07.995544-04	Flame Arrows	You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra 1d6 fire damage. The spell's magic ends on the piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver.	t	1 action	{V,S}		Touch	\N	3	up to 1 hour	Transmutation
192	2016-05-28 16:48:07.996376-04	2016-05-28 16:48:07.996565-04	Wall of Sand	You conjure up a wall of swirling sand on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick, and it vanishes when the spell ends. It blocks line of sight but not movement. A creature is blinded while in the wall's space and must spend 3 feet of movement for every 1 foot it moves there.	t	1 action	{V,S,M}	a handful of sand	90 feet	\N	3	up to 10 minutes	Evocation
193	2016-05-28 16:48:07.997278-04	2016-05-28 16:48:07.997455-04	Erupting Earth	Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes 3d12 bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes difficult terrain until cleared away. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand.	f	1 action	{V,S,M}	a piece of obsidian	120 feet	\N	3	Instantaneous	Transmutation
194	2016-05-28 16:48:07.998129-04	2016-05-28 16:48:07.998315-04	Blur	Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with truesight.	t	1 action	{V}		Self	\N	2	up to 1 minute	Illusion
195	2016-05-28 16:48:07.999102-04	2016-05-28 16:48:07.99933-04	Arcane Lock	You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting knock on the object suppresses arcane lock for 10 minutes.\n While affected by this spell, the object is more difficult to break or force open	f	1 action	{V,S,M}	gold dust worth at least 25 gp, which the spell consumes	Touch	\N	2		Abjuration
196	2016-05-28 16:48:08.000166-04	2016-05-28 16:48:08.000367-04	Darkness	Magical darkness spreads from a point you choose within range to fill a 15-foot radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it.\n If the point you choose is on an object you are holding or one that isn't being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, blocks the darkness. If any of this spell's area overlaps with an area of light created by a spell of or lower, the spell that created the light is dispelled. 	t	1 action	{V,M}	bat fur and a drop of pitch or piece of coal	60 feet	\N	2	up to 10 minutes	Evocation
197	2016-05-28 16:48:08.001109-04	2016-05-28 16:48:08.00129-04	Darkvision	You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has darkvision out to a range of 60 feet.	f	1 action	{V,S,M}	either a pinch of dried carrot or an agate	Touch	\N	2	8 hours	Transmutation
198	2016-05-28 16:48:08.001987-04	2016-05-28 16:48:08.002161-04	Alter Self	You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.\n Aquatic Adaptation: You adapt your body to an aquatic environment, sprouting gills, and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed. Change Appearance: You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also don't appear as a creature of a different size than you, and your basic shape stays the same, if you're bipedal, you can't use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again. Natural Weapons: You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with you unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it. 	t	1 action	{V,S}		Self	\N	2	up to 1 hour	Transmutation
199	2016-05-28 16:48:08.002836-04	2016-05-28 16:48:08.003008-04	Cloud of Daggers	You fill the air with spinning daggers in a cube 5 feet on each side, centered on a point you choose within range. A creature takes 4d4 slashing damage when it enters the spell's area for the first time on a turn or starts its turn there.\n At Higher Levels: when you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d4 for each slot level above 2nd. 	t	1 action	{V,S,M}	a sliver of glass	60 feet	\N	2	up to 1 minute	Conjuration
200	2016-05-28 16:48:08.003676-04	2016-05-28 16:48:08.003851-04	Enlarge/Reduce	You cause a creature or an object you can see within range to grow larger or smaller for the duration. Choose either a creature or an object that is neither worn nor carried. If the target is unwilling, it can make a Constitution saving throw. On a success, the spell has no effect.\n If the target is a creature, everything it is wearing and carrying changes size with it. Any item dropped by an affected creature returns to normal size at once. Enlarge. The target's size doubles in all dimensions, and its weight is multiplied by eight. This growth increases its size by one category - from Medium to Large, for example. If there isn't enough room for the target to double its size, the creature or object attains the maximum possible size in the space available. Until the spell ends, the target also has advantage on Strength checks and Strength saving throws. The target's weapons also grow to match its new size. While these weapons are enlarged, the target's attack with them deal 1d4 extra damage. Reduce. The target's size is halved in all dimensions, and its weight is reduced to one-eighth of normal. This reduction decreases its size by one category - from Medium to Small, for example. Until the spell ends, the target also has disadvantage on Strength checks and Strength saving throws. The target's weapons also shrink to match its new size. While these weapons are reduced, the target's attacks with them deal 1d4 less damage (this can't reduce the damage below 1). 	t	1 action	{V,S,M}	a pinch of powdered iron	30 feet	\N	2	up to 1 minute	Transmutation
201	2016-05-28 16:48:08.004577-04	2016-05-28 16:48:08.004758-04	Gust of Wind	A line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the spell's duration. Each creature that starts its turn in the line must succeed on a Strength saving throw or be pushed 15 feet away from you in a direction following the line.\n Any creature in the line must spend 2 feet of movement for every 1 foot it moves when moving closer to you. The gust disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them. As a bonus action on each of your turns before the spell ends, you can change the direction in which the line blasts from you. 	t	1 action	{V,S,M}	a legume seed	Self (60-foot line)	\N	2	up to 1 minute	Evocation
202	2016-05-28 16:48:08.005491-04	2016-05-28 16:48:08.00567-04	Storm Sphere	A 20-foot-radius sphere of whirling air springs into existence centered on a point you choose within range. The sphere remains for the spell's duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take 2d6 bludgeoning damage. The sphere's space is difficult terrain.	t	1 action	{V,S}		150 feet	\N	4	up to 1 minute	Evocation
203	2016-05-28 16:48:08.006367-04	2016-05-28 16:48:08.006547-04	Invisibility	A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell.\n At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd. 	t	1 action	{V,S,M}	an eyelash encased in gum arabic	Touch	\N	2	up to 1 hour	Illusion
204	2016-05-28 16:48:08.007243-04	2016-05-28 16:48:08.007423-04	Elemental Bane	Choose one creature you can see within range, and choose one of the following damage types - acid, cold, fire, lightning, or thunder. The target must succeed on a Constitution saving throw or be affected by the spell for its duration. The first time each turn the affected target takes damage of the chosen type, the target takes an extra 2d6 damage of that type. Moreover, the target loses any resistance to that damage type until the spell ends.	t	1 action	{V,S}		90 feet	\N	4	up to 1 minute	Transmutation
205	2016-05-28 16:48:08.008122-04	2016-05-28 16:48:08.008305-04	Levitate	One creature or object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected.\n The target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the target's altitude by up to 20 feet in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can use your action to move the target, which must remain within the spell's range. When the spell ends, the target floats gently to the ground if it is still aloft. 	t	1 action	{V,S,M}	either a small leather loop or a piece of golden wire bent into a cup shape with a long shank on one end	60 feet	\N	2	up to 10 minutes	Transmutation
206	2016-05-28 16:48:08.009006-04	2016-05-28 16:48:08.009186-04	Knock	Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access.\n A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked. If you choose a target that is held shut with arcane lock, that spell is suppressed for 10 minutes, during which time the target can be opened and shut normally. When you cast the spell, a loud knock, audible from as far away as 300 feet, emanates from the target object. 	f	1 action	{V}		60 feet	\N	2	Instantaneous	Transmutation
207	2016-05-28 16:48:08.009851-04	2016-05-28 16:48:08.010048-04	Melf's Acid Arrow	(powdered rhubarb leaf and an adder's stomach)A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.\n At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd. 	f	1 action	{V,S,M}		90 feet	\N	2	Instantaneous	Evocation
208	2016-05-28 16:48:08.010855-04	2016-05-28 16:48:08.011034-04	Haste	Choose a willing creature that you can see within range. Until the spell ends, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.\n When the spell ends, the target can't move or take actions until after its next turn, as a wave of lethargy sweeps over it. 	t	1 action	{V,S,M}	a shaving of licorice root	30 feet	\N	3	up to 1 minute	Transmutation
209	2016-05-28 16:48:08.012287-04	2016-05-28 16:48:08.012512-04	Magic Mouth (ritual)	You implant a message within an object in range, a message that is uttered when a trigger condition is met. Choose an object that you can see and that isn't being worn or carried by another creature. Then speak the message, which must be 25 words or less, though it can be delivered over as long as 10 minutes. Finally, determine the circumstance that will trigger the spell to deliver your message.\n When that circumstance occurs, a magical mouth appears on the object and recites the message in your voice and at the same volume you spoke. If the object you chose has a mouth or something that looks like a mouth (for example, the mouth of a statue), the magical mouth appears there so that words appear to come from the object's mouth. When you cast this spell, you can have the spell end after it delivers its message, or it can remain and repeats its message whenever the trigger occurs. The triggering circumstance can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the object. For example, you could instruct the mouth to speak when any creature moves within 30 feet of the object or when a silver bell rings within 30 feet of it. 	f	1 minute	{V,S,M}	a small bit of honeycomb and jade dust worth at least 10 gp, which the spell consumes	30 feet	\N	2		Illusion
238	2016-05-28 16:48:08.039063-04	2016-05-28 16:48:08.039231-04	Control Winds	You take control of the air in a 100-foot cube that you can see within range. Choose one of the following effects when you cast the spell. The effect lasts for the spell's duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the effect or to restart one you've halted.	t	1 action	{V,S}		300 feet	\N	5	up to 1 hour	Transmutation
210	2016-05-28 16:48:08.013343-04	2016-05-28 16:48:08.013521-04	Gaseous Form	You transform a willing creature you touch, along with everything it's wearing and carrying, into a misty cloud for the duration. The spell ends if the creature drops to 0 hit points. An incorporeal creature isn't affected.\n While in this form, the target's only method of movement is a flying speed of 10 feet. The target can enter and occupy the space of another creature. The target has resistance to nonmagical damage, and it has advantage on Strength, Dexterity, and Constitution saving throws. The target can pass through small holes, narrow openings, and even mere cracks, though it treats liquids as though they were solid surfaces. The target can't fall and remains hovering in the air even when stunned or otherwise incapacitated. While in the form of a misty cloud, the target can't talk or manipulate objects, and any objects it was carrying or holding can't be dropped, used, or otherwise interacted with. The target can't attack or cast spells. 	t	1 action	{V,S,M}	a bit of gauze and a wisp of smoke	Touch	\N	3	up to 1 hour	Transmutation
211	2016-05-28 16:48:08.014259-04	2016-05-28 16:48:08.014438-04	Hypnotic Pattern	You create a twisting pattern of colors that weaves through the air inside a 30-foot cube within range. The pattern appears for a moment and vanishes. Each creature in the area who sees the pattern must make a Wisdom saving throw. On a failed save, the creature becomes charmed for the duration. While charmed by this spell, the creature is incapacitated and has a speed of 0.\n The spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor. 	t	1 action	{S,M}	a glowing stick of incense or a crystal vial filled with phosphorescent material	120 feet	\N	3	up to 1 minute	Illusion
212	2016-05-28 16:48:08.015111-04	2016-05-28 16:48:08.015292-04	Misty Step	Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.	f	1 bonus action	{V}		Self	\N	2	Instantaneous	Conjuration
213	2016-05-28 16:48:08.016142-04	2016-05-28 16:48:08.016471-04	Rope Trick	You touch a length of rope that is up to 60 feet long. One end of the rope then rises into the air until the whole rope hangs perpendicular to the ground. At the upper end of the rope, an invisible entrance opens to an extradimensional space that lasts until the spell ends.\n The extradimensional space can be reached by climbing to the top of the rope. The space can hold as many as eight Medium or smaller creatures. The rope can be pulled into the space, making the rope disappear from view outside the space. Attacks and spells can't cross through the entrance into or out of the extradimensional space, but those inside can see out of it as if through a 3-foot-by-5-foot window centered on the rope. Anything inside the extradimensional space drops out when the spell ends. 	f	1 action	{V,S,M}	powdered corn extract and a twisted loop of parchment	Touch	\N	2	1 hour	Transmutation
214	2016-05-28 16:48:08.017349-04	2016-05-28 16:48:08.017559-04	See Invisibility	For the duration, you see invisible creatures and objects as if they were visible, and you can see into the Ethereal Plane. Ethereal creatures and objects appear ghostly and translucent.	f	1 action	{V,S,M}	A pinch of Talc and a small sprinkling of powdered silver	Self	\N	2	1 hour	Divination
215	2016-05-28 16:48:08.018261-04	2016-05-28 16:48:08.018439-04	Web	You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area.\n If the webs aren't anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet. Each creature that starts its turn in the webs or that enters them during its turn must make a Dexterity saving throw. On a failed save, the creature is restrained as long as it remains in the webs or until it breaks free. A creature restrained by the webs can use its actions to make a Strength check against your spell save DC. If it succeeds, it is no longer restrained. The webs are flammable. Any 5-foot cube of webs exposed to fire burns away in 1 round, dealing 2d4 fire damage to any creature that starts its turn in the fire. 	t	1 action	{V,S,M}	a bit of spider web	60 feet	\N	2	up to 1 hour	Conjuration
216	2016-05-28 16:48:08.019119-04	2016-05-28 16:48:08.019289-04	Spider Climb	Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed.	t	1 action	{V,S,M}	a drop of bitumen and a spider	Touch	\N	2	up to 1 hour	Transmutation
217	2016-05-28 16:48:08.020054-04	2016-05-28 16:48:08.020242-04	Leomund's Tiny Hut (ritual)	A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area.\n Nine creatures of Medium size or smaller can fit inside the dome with you. The spell fails if its area includes a larger creature or more than nine creatures. Creatures and objects within the dome when you cast this spell can move through it freely. All other creatures and objects are barred from passing through it. Spells and other magical effects can't extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, regardless of the weather outside. Until the spell ends, you can command the interior to become dimly lit or dark. The dome is opaque from the outside, of any color you choose, but it is transparent from the inside. 	f	1 minute	{V,S,M}	a small crystal bead	Self (10-foot-radius hemisphere)	\N	3	8 hours	Evocation
218	2016-05-28 16:48:08.020953-04	2016-05-28 16:48:08.021131-04	Blink	Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane). At the start of you next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from. If no unoccupied space is available within that range, you appear in the nearest unoccupied space (chosen at random if more than one space is equally near). You can dismiss this spell as an action.\n While on the Ethereal Plane, you can see and hear the plane you originated from, which is cast in shades of gray, and you can't see anything more than 60 feet away. You can only affect and be affected by other creatures on the Ethereal Plane. Creature that aren't there can't perceive you or interact with you, unless they have the ability to do so. 	f	1 action	{V,S}		Self	\N	3	1 minute	Transmutation
239	2016-05-28 16:48:08.039922-04	2016-05-28 16:48:08.040102-04	Transmute Rock	You choose an area of stone or mud that you can see that fits within a 40-foot cube and that is within range, and choose one of the following effects.	f	1 action	{V,S,M}	clay and water	120 feet	\N	5	Instantaneous	Transmutation
219	2016-05-28 16:48:08.021891-04	2016-05-28 16:48:08.022083-04	Lightning Bolt	A stroke of lightning forming a line of 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one.\n The lightning ignites flammable objects in the area that aren't being worn or carried. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot above 3rd. 	f	1 action	{V,S,M}	a bit of fur and a rod of amber, crystal, or glass	Self (100-foot line)	\N	3	Instantaneous	Evocation
220	2016-05-28 16:48:08.022864-04	2016-05-28 16:48:08.023079-04	Fly	You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall.\n At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd. 	t	1 action	{V,S,M}	a wing feather from any bird	Touch	\N	3	up to 10 minutes	Transmutation
221	2016-05-28 16:48:08.023832-04	2016-05-28 16:48:08.024027-04	Counterspell	You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails and has no effect.\n At Higher Level. When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used. 	f	1 reaction	{S}		60 feet	\N	3	Instantaneous	Abjuration
222	2016-05-28 16:48:08.024753-04	2016-05-28 16:48:08.024938-04	Fear	You project a phantasmal image of a creature's worst fears. Each creature in a 30-foot cone must succeed on a Wisdom saving throw or drop whatever it is holding and become frightened for the duration.\n While frightened by this spell, a creature must take the Dash action and move away from you by the safest available route on each of its turns, unless there is nowhere to move. If the creature ends its turn in a location where it doesn't have line of sight to you, the creature can make a Wisdom saving throw. On a successful save, the spell ends for that creature. 	t	1 action	{V,S,M}	a white feather or the heart of a hen	Self (30-foot cone)	\N	3	up to 1 minute	Illusion
223	2016-05-28 16:48:08.025667-04	2016-05-28 16:48:08.02585-04	Phantom Steed (ritual)	A Large quasi-real, horse-like creature appears on the ground in an unoccupied space of your choice within range. You decide the creature's appearance, but it is equipped with a saddle, bit, and bridle. Any of the equipment created by the spell vanishes in a puff of smoke if it is carried more than 10 feet away from the steed.\n For the duration, you or a creature you choose can ride the steed. The creature uses the statistics for a riding horse, except it has a speed of 100 feet and can travel 10 miles in an hour, or 13 miles at a fast pace. When the spell ends, the steed gradually fades, giving the rider 1 minute to dismount. The spell ends if you use an action to dismiss it or if the steed takes any damage. 	f	1 minute	{V,S}		30 feet	\N	3	1 hour	Illusion
224	2016-05-28 16:48:08.026528-04	2016-05-28 16:48:08.026703-04	Chain Lightning	You create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts.\n A target must make a Dexterity saving throw. The target takes 10d8 lightning damage on a failed save, or half as much on a successful one. At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, one additional bolt leaps from the first target to another target for each slot level above 6th. 	f	1 action	{V,S,M}	a bit of fur, a piece of amber, glass, or crystal rod, and three silver pins	150 feet	\N	6	Instantaneous	Evocation
225	2016-05-28 16:48:08.027398-04	2016-05-28 16:48:08.027577-04	Slow	You alter time around up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on a Wisdom saving throw or be affected by this spell for the duration.\n An affected target's speed is halved, it takes a -2 penalty to AC and Dexterity saving throws, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn. If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the spell. If it can't, the spell is wasted. A creature affected by this spell makes another Wisdom saving throw at the end of its turn. On a successful save, the effect ends for it. 	t	1 action	{V,S,M}	a drop of molasses	120 feet	\N	3	up to 1 minute	Transmutation
226	2016-05-28 16:48:08.028279-04	2016-05-28 16:48:08.028455-04	Watery Sphere	You conjure up a sphere of water with a 10-foot radius on a point you can see within range. The sphere can hover in the air, but no more than 10 feet off the ground. The sphere remains for the spell's duration.	t	1 action	{V,S,M}	a droplet of water	90 feet	\N	4	up to 1 minute	Conjuration
227	2016-05-28 16:48:08.029142-04	2016-05-28 16:48:08.02932-04	Vitriolic Sphere	You point at a place within range, and a glowing 1-foot ball of emerald acid streaks there and explodes in a 20-foot radius. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 10d4 acid damage and 5d4 acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage and no damage at the end of its next turn.	f	1 action	{V,S,M}	a drop of giant slug bile	150 feet	\N	4	Instantaneous	Evocation
228	2016-05-28 16:48:08.029992-04	2016-05-28 16:48:08.030166-04	Passwall	A passage appears at a point of your choice that you can see on a wooden, plaster, or stone surface (such as a wall, a ceiling, or a floor) within range, and lasts for the duration. You choose the opening's dimensions - up to 5 feet wide, 8 feet tall, and 20 feet deep. The passage creates no instability in a structure surrounding it.\n When the opening disappears, any creatures or objects still in the passage created by the spell are safely ejected to an unoccupied space nearest to the surface on which you cast the spell. 	f	1 action	{V,S,M}	a pinch of sesame seeds	30 feet	\N	5	1 hour	Transmutation
229	2016-05-28 16:48:08.030844-04	2016-05-28 16:48:08.031021-04	Rary's Telepathic Bond (ritual)	You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures with Intelligence scores of 2 or less aren't affected by this spell.\n Until the spell ends, the targets can communicate telepathically through the bond whether or not they have a common language. The communication is possible over any distance, though it can't extend to other planes of existence. 	f	1 action	{V,S,M}	pieces of eggshell from two different kinds of creatures	30 feet	\N	5	1 hour	Divination
230	2016-05-28 16:48:08.031704-04	2016-05-28 16:48:08.031884-04	Conjure Minor Elementals	You summon elementals that appear in unoccupied spaces that you can see within range. You choose one the following options for what appears.\n • One elemental of challenge rating 2 or lower • Two elementals of challenge rating 1 or lower • Four elementals of challenge rating 1/2 or lower • Eight elementals of challenge rating 1/4 or lower. An elemental summoned by this spell disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The DM has the creatures' statistics. At Higher Levels: When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear - twice as many with a 6th-level slot and three times as many with an 8th-level slot 	t	1 minute	{V,S}		90 feet	\N	4	up to 1 hour	Conjuration
231	2016-05-28 16:48:08.032823-04	2016-05-28 16:48:08.033041-04	Evard's Black Tentacles	Squirming, ebony tentacles fill a 20-foot square on ground that you can see within range. For the duration, these tentacles turn the ground in the area into difficult terrain.\n When a creature enters the affected area for the first time on a turn or starts its turn there, the creature must succeed on a Dexterity saving throw or take 3d6 bludgeoning damage and be restrained by the tentacles until the spell ends. A creature that starts its turn in the area and is already restrained by the tentacles takes 3d6 bludgeoning damage. A creature restrained by the tentacles can use its action to make a Strength or Dexterity check (its choice) against your spell save DC. On a success, it frees itself. 	t	1 action	{V,S,M}	a piece of tentacle from a giant octopus or a giant squid	90 feet	\N	4	up to 1 minute	Conjuration
232	2016-05-28 16:48:08.033873-04	2016-05-28 16:48:08.03407-04	Arcane Gate	You create linked teleportation portals that remain open for the duration. Choose two points on the ground that you can see, one point within 10 feet of you and one point within 500 feet of you. A circular portal, 10 feet in diameter, opens over each point. If the portal would open in the space occupied by a creature, the spell fails, and the casting is lost.\n The portals are two-dimensional glowing rings filled with mist, hovering inches from the ground and perpendicular to it at the points you choose. A ring is visible only from one side (your choice), which is the side that functions as a portal. Any creature or object entering the portal exits from the other portal as if the two were adjacent to each other, passing through a portal from the non-portal side has no effect. The mist that fills each portal is opaque and blocks vision through it. On your turn, you can rotate the rings as a bonus action so that the active side faces in a different direction. 	t	1 action	{V,S}		500 feet	\N	6	up to 10 minutes	Conjuration
233	2016-05-28 16:48:08.034804-04	2016-05-28 16:48:08.034986-04	Fabricate	You convert raw materials into products of the same material. For example, you can fabricate a wooden bridge from a clump of trees, a rope from a patch of hemp, and clothes from flax or wool.\n Choose raw materials that you can see within range. You can fabricate a Large or smaller object (contained within a 10-foot cube, or eight connected 5-foot cubes), given a sufficient quantity of raw material. If you are working with metal, stone, or another mineral substance, however, the fabricated object can be no larger than Medium (contained within a single 5-foot cube). The quality of objects made by the spell is commensurate with the quality of the raw materials. Creatures or magic items can't be created or transmuted by this spell. You also can't use it to create items that ordinarily require a high degree of craftsmanship, such as jewelry, weapons, glass, or armor, unless you have proficiency with the type of artisan's tools used to craft such objects. 	f	10 minutes	{V,S}		120 feet	\N	4	Instantaneous	Evocation
234	2016-05-28 16:48:08.035721-04	2016-05-28 16:48:08.035897-04	Greater Invisibility	You or a creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person.	t	1 action	{V,S}		Touch	\N	4	up to 1 minute	Illusion
235	2016-05-28 16:48:08.036561-04	2016-05-28 16:48:08.036731-04	Leomund's Secret Chest	You hide a chest, and all its contents, on the Ethereal Plane. You must touch the chest and the miniature replica that serves as a material component for the spell. The chest can contain up to 12 cubic feet of nonliving material (3 feet by 2 feet by 2 feet).\n While the chest remains on the Ethereal Plane, you can use an action and touch the replica to recall the chest. It appears in an unoccupied space on the ground within 5 feet of you. You can send the chest back to the Ethereal Plane by using an action and touching both the chest and the replica. After 60 days, there is a cumulative 5 percent chance per day that the spell's effect ends. This effect ends if you cast this spell again, if the smaller replica chest is destroyed, or if you choose to end the spell as an action. If the spell ends and the larger chest is on the Ethereal Plane, it is irretrievably lost. 	f	1 action	{V,S,M}	an exquisite chest, 3 feet by 2 feet by 2 feet, constructed from rare materials worth at least 5,000 gp, and a Tiny replica made from the same materials worth at least 50 gp	Touch	\N	4	Instantaneous	Conjuration
236	2016-05-28 16:48:08.037403-04	2016-05-28 16:48:08.037572-04	Mordenkainen's Faithful Hound	You conjure a phantom watchdog in an unoccupied space that you can see within range, where it remains for the duration, until you dismiss it as an action, or until you move more than 100 feet away from it.\n The hound is invisible to all creatures except you and can't be harmed. When a Small or larger creature comes within 30 feet of it without first speaking the password that you specify when you cast this spell, the hound starts barking loudly. The hound sees invisible creatures and can see into the Ethereal Plane. It ignores illusions. At the start of each of your turns, the hound attempts to bite one creature within 5 feet of it that is hostile to you. The hound's attack bonus is equal to your spellcasting ability modifier + your proficiency bonus. On a hit, it deals 4d8 piercing damage. 	f	1 action	{V,S,M}	a tiny silver whistle, a piece of bone, and a thread	30 feet	\N	4	8 hours	Conjuration
237	2016-05-28 16:48:08.038235-04	2016-05-28 16:48:08.038407-04	Immolation	Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes 7d6 fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the spell's duration. The burning target sheds bright light in a 30-foot radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes 3d6 fire damage on a failed save, and the spell ends on a successful one. These magical flames can't be extinguished through nonmagical means.	t	1 action	{V}		90 feet	\N	5	up to 1 minute	Evocation
240	2016-05-28 16:48:08.04079-04	2016-05-28 16:48:08.040971-04	Fire Shield	Thin and wispy flames wreathe your body for the duration, shedding bright light in a 10-foot radius and dim light for an additional 10 feet. You can end the spell early by using an action to dismiss it.\n The flames provide you with a warm shield or a chill shield, as you choose. The warm shield grants you resistance to cold damage, and the chill shield grants you resistance to fire damage. In addition, whenever a creature within 5 feet of you hits you with a melee attack, the shield erupts with flame. The attacker takes 2d8 fire damage from a warm shield, or 2d8 cold damage from a cold shield. 	f	1 action	{V,S,M}	a bit of phosphorous or a firefly	Self	\N	4	10 minutes	Evocation
241	2016-05-28 16:48:08.041706-04	2016-05-28 16:48:08.041895-04	Mordenkainen's Private Sanctum	You make an area within range magically secure. The area is a cube that can be as small as 5 feet to as large as 100 feet on each side. The spell lasts for the duration or until you use an action to dismiss it.\n When you cast the spell, you decide what sort of security the spell provides, choosing any or all of the following properties. • Sound can't pass through the barrier at the edge of the warded area. • The barrier of the warded area appears dark and foggy, preventing vision (including darkvision) through it. • Sensors created by divination spells can't appear inside the protected area or pass through the barrier at its perimeter. • Creatures in the area can't be targeted by divination spells. • Nothing can teleport into or out of the warded area. • Planar travel is blocked within the warded area. Casting this spell on the same spot every day for a year makes this effect permanent. At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, you can increase the size of the cube by 100 feet for each slot level beyond 4th. Thus you could protect a cube that can be up to 200 feet on one side by using a spell slot of 5th level. 	f	10 minutes	{V,S,M}	a thin sheet of lead, a piece of opaque glass, a wad of cotton or cloth, and powdered chrysolite	120 feet	\N	4	24 hours	Abjuration
242	2016-05-28 16:48:08.042643-04	2016-05-28 16:48:08.042822-04	Otiluke's Resilient Sphere	A sphere of shimmering force encloses a creature or object of Large size or smaller within range. An unwilling creature must make a Dexterity saving throw. On a failed save, the creature is enclosed for the duration.\n Nothing, not physical objects, energy, or other spell effects, can pass through the barrier, in or out, though a creature in the sphere can breathe there. The sphere is immune to all damage, and a creature or object inside can't be damaged by attacks or effects originating from outside, nor can a creature inside the sphere damage anything outside it. The sphere is weightless and just large enough to contain the creature or object inside. An enclosed creature can use its action to push against the sphere's walls and thus roll the sphere at up to half the creature's speed. Similarly, the globe can be picked up and moved by other creatures. A disintegrate spell targeting the globe destroys it without harming anything inside it. 	t	1 action	{V,S,M}	a hemispherical piece of clear crystal and a matching hemispherical piece of gum arabic	30 feet	\N	4	up to 1 minute	Evocation
243	2016-05-28 16:48:08.043511-04	2016-05-28 16:48:08.043683-04	Phantasmal Killer	You tap into the nightmares of a creature you can see within range and create an illusory manifestation of its deepest fears, visible only to that creature. The target must make a Wisdom saving throw. On a failed save, the target becomes frightened for the duration. At the end of each of the target's turns before the spell ends, the target must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends.\n At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th. 	t	1 action	{V,S}		120 feet	\N	4	up to 1 minute	Illusion
244	2016-05-28 16:48:08.044672-04	2016-05-28 16:48:08.0449-04	Wall of Fire	You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot think, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot think. The wall is opaque and lasts for the duration.\n When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage, or half as much damage on a successful save. One side of the wall, selected by you when you cast this spell, deals 5d8 fire damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage. At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th. 	t	1 action	{V,S,M}	a small piece of phosphorus	120 feet	\N	4	up to 1 minute	Evocation
245	2016-05-28 16:48:08.045671-04	2016-05-28 16:48:08.045852-04	Bigby's Hand	You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell's duration, and it moves at your command, mimicking the movements of your own hand.\n The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The hand doesn't fill its space. When you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 60 feet and then cause one of the following effects with it. Clenched Fist. The hand strikes one creature or object within 5 feet of it. Make a melee spell attack for the hand using your game statistics. On a hit, the target takes 4d8 force damage. Forceful Hand. The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hand's Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target to remain within 5 feet of it. Grasping Hand. The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hand's Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes bludgeoning damage equal to 2d6 + your spellcasting ability modifier. Interposing Hand. The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can't move through the hand's space if its Strength score is less than or equal to the hand's Strength score. If its Strength score is higher than the hand's Strength score, the target can move toward you through the hand's space, but that space is difficult terrain for the target. At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by 2d8 and the damage from the grasping hand increases by 2d6 for each slot level above 5th. 	t	1 action	{V,S,M}	an eggshell and a snakeskin glove	120 feet	\N	5	up to 1 minute	Evocation
246	2016-05-28 16:48:08.046619-04	2016-05-28 16:48:08.046795-04	Contact Other Plane (ritual)	You mentally contact a demigod, the spirit of a long-dead sage, or some other mysterious entity from another plane. Contacting this extraplanar intelligence can strain or even break your mind. When you cast this spell, make a DC 15 Intelligence saving throw. On a failure, you take 6d6 psychic damage and are insane until you finish a long rest. While insane, you can't take actions, can't understand what other creatures say, can't read, and speak only in gibberish. A greater restoration spell cast on you ends this effect.\n On a successful save, you can ask the entity up to five questions. You must ask your questions before the spell ends. The DM answers each question with one word, such as yes, no, maybe, never, irrelevant, unclear (if the entity doesn't know the answer to the question). If a one-word answer would be misleading, the DM might instead offer a short phrase as an answer. 	f	1 minute	{V}		Self	\N	5	1 minute	Divination
247	2016-05-28 16:48:08.047471-04	2016-05-28 16:48:08.047642-04	Cone of Cold	A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one.\n A creature killed by this spell becomes a frozen statue until it thaws. At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th. 	f	1 action	{V,S,M}	a small crystal or glass cone	Self (60-foot cone)	\N	5	Instantaneous	Evocation
248	2016-05-28 16:48:08.048442-04	2016-05-28 16:48:08.048859-04	Conjure Elemental	You call forth an elemental servant. Choose an area of air, earth, fire, or water that fills a 10-foot cube within range. An elemental of challenge rating 5 or lower appropriate to the area you chose appears in an unoccupied space within 10 feet of it. For example, a fire elemental emerges from a bonfire, and an earth elemental rises up from the ground. The elemental disappears when it drops to 0 hit points or when the spell ends.\n The elemental is friendly to you and your companions for the duration. Roll initiative for the elemental, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don't issue any commands to the elemental, it defends itself from hostile creatures but otherwise takes no actions. If your concentration is broken, the elemental doesn't disappear. Instead, you lose control of the elemental, it becomes hostile toward you and your companions, and it might attack. An uncontrolled elemental can't be dismissed by you, and it disappears 1 hour after you summoned it. The DM has the elemental's statistics. At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th. 	t	1 minute	{V,S,M}	burning incense for air, soft clay for earth, sulfur and phosphorus for fire, or water and sand for water	90 feet	\N	5	up to 1 hour	Conjuration
249	2016-05-28 16:48:08.049868-04	2016-05-28 16:48:08.050084-04	Mislead	You become invisible at the same time that an illusory double of you appears where you are standing. The double lasts for the duration, but the invisibility ends if you attack or cast a spell.\n You can use your action to move your illusory double up to twice your speed and make it gesture, speak, and behave in whatever way you choose. You can see through its eyes and hear through its ears as if you were located where it is. On each of your turns as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings. 	t	1 action	{S}		Self	\N	5	up to 1 hour	Illusion
250	2016-05-28 16:48:08.05087-04	2016-05-28 16:48:08.051056-04	Modify Memory	You attempt to reshape another creature's memories. One creature that you can see must make a Wisdom saving throw. If you are fighting the creature, it has advantage on the saving throw. On a failed save, the target becomes charmed by you for the duration. The charmed target is incapacitated and unaware of its surroundings, though it can still hear you. If it takes any damage or is targeted by another spell, this spell ends, and none of the target's memories are modified.\n While this charm lasts, you can affect the target's memory of an event that it experienced within the last 24 hours and that lasted no more than 10 minutes. You can permanently eliminate all memory of the event, allow the target to recall the event with perfect clarity and exacting detail, change its memory of the details of the event, or create a memory of some other event. You must speak to the target to describe how its memories are affected, and it must be able to understand your language for the modified memories to take root. Its mind fills in any gaps in the details of your description. If the spell ends before you have finished describing the modified memories, the creature's memory isn't altered. Otherwise, the modified memories take hold when the spell ends. A modified memory doesn't necessarily affect how a creature behaves, particularly if the memory contradicts the creature's natural inclinations, alignment, or beliefs. An illogical modified memory, such as implanting a memory of how much the creature enjoyed dousing itself in acid, is dismissed, perhaps as a bad dream. The DM might deem a modified memory too nonsensical to affect a creature in a significant manner. A remove curse or greater restoration spell cast on the target restores the creature's true memory. At Higher Levels: If you cast this spell using a spell slot of 6th level or higher, you can alter the target's memories of an event that took place up to 7 days ago (6th level), 30 days ago (7th level), 1 year ago (8th level), or any time in the creature's past (9th level). 	t	1 action	{V,S}		30 feet	\N	5	up to 1 minute	Enchantment
251	2016-05-28 16:48:08.052072-04	2016-05-28 16:48:08.052294-04	Wall of Force	An invisible wall of force springs into existence at a point you choose within range. The wall appears in any orientation you choose, as a horizontal or vertical barrier or at an angle. It can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel. In any form, the wall is 1/4 inch thick. It lasts for the duration. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice which side).\n Nothing can physically pass through the wall. It is immune to all damage and can't be dispelled by dispel magic. A disintegrate spell destroys the wall instantly, however. The wall also extends into the Ethereal Plane, blocking ethereal travel through the wall. 	t	1 action	{V,S,M}	a pinch of powder made by crushing a clear gemstone	120 feet	\N	5	up to 10 minutes	Evocation
252	2016-05-28 16:48:08.053391-04	2016-05-28 16:48:08.053667-04	Wall of Stone	A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least on other panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick.\n If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall. The wall can have any shape you desire, though it can't occupy the same space as a creature or object. the wall doesn't need to be vertical or resting on any firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus you can use this spell to bridge a chasm or create a ramp. If you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create crenellations, battlements, and so on. The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 hit points per inch of thickness. Reducing a panel to 0 hit points destroys it and might cause connected panels to collapse at the DM's discretion. If you maintain your concentration on this spell for its whole duration, the wall becomes permanent and can't be dispelled. Otherwise, the wall disappears when the spell ends. 	t	1 action	{V,S,M}	a small block of granite	120 feet	\N	5	up to 10 minutes	Evocation
393	2016-05-28 16:48:08.191054-04	2016-05-28 16:48:08.191238-04	Elemental Weapon	A nonmagical weapon you touch becomes a magic weapon. Choose one of the following damage types - acid, cold, fire, lightning, or thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits.\n At Higher Levels: When you cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4. When you use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4. 	t	1 action	{V,S}		Touch	\N	3	up to 1 hour	Transmutation
253	2016-05-28 16:48:08.054872-04	2016-05-28 16:48:08.055076-04	Seeming	This spell allows you to change the appearance of any number of creatures that you can see within range. You give each target you choose a new, illusory appearance. An unwilling target can make a Charisma saving throw, and if it succeeds, it is unaffected by this spell.\n The spell disguises physical appearances as well as clothing, armor, weapons, and equipment. You can make each creature seem 1 foot shorter or taller and appear thin, fat, or in-between. You can't change a target's body type, so you must choose a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The spell lasts for the duration, unless you use your action to dismiss it sooner. The changes wrought by this spell fail to hold up to physical inspections. For example, if you use this spell to add a hat to a creature's outfit objects pass through the hat, and anyone who touches it would feel nothing or would feel the creature's head and hair. If you use this spell to appear thinner then you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair. A creature can use its action to inspect a target and make an Intelligence (Investigation) check against your spell save DC. If it succeeds, it becomes aware that the target is disguised. 	f	1 action	{V,S}		30 feet	\N	5	8 hours	Illusion
254	2016-05-28 16:48:08.056138-04	2016-05-28 16:48:08.056401-04	Contingency	Choose a spell of or lower that you can cast, that has a casting time of 1 action, and that can target you. You cast that spell, called the contingent spell, as part of casting contingency, expending spell slots for both, but the contingent spell doesn't come into effect. Instead, it takes effect when a certain circumstance occurs. You describe that circumstance when you cast the two spells. For example, a contingency cast with water breathing might stipulate that water breathing comes into effect when you are engulfed in water or a similar liquid.\n The contingent spell takes effect immediately after the circumstance is met for the first time, whether or not you want it to, and then contingency ends. The contingent spell takes effect only on you, even if it can normally target others. You can use only one contingency spell at a time. If you cast this spell again, the effect of another contingency spell on you ends. Also, contingency ends on you if its material component is ever not on your person. 	f	10 minutes	{V,S,M}	a statuette of yourself carved from ivory and decorated with gems worth at least 1,500 gp	Self	\N	6	10 days	Evocation
255	2016-05-28 16:48:08.057452-04	2016-05-28 16:48:08.057655-04	Eyebite	For the spell's duration, your eyes become an inky void imbued with dread power. One creature of your choice within 60 feet of you that you can see must succeed on a Wisdom saving throw or be affected by one of the following effects of your choice for the duration. On each of your turns until the spell ends, you can use your action to target another creature but can't target a creature again if it has succeeded on a saving throw against this casting of Eyebite.\n Asleep: The target falls unconscious. It wakes up if it takes any damage or if another creature uses its action to shake the sleeper awake. Panicked: The target is frightened of you. On each of its turns, the frightened creature must take the Dash action and move away from you by the safest and shortest available route, unless there is nowhere to move. If the target moves to a place at least 60 feet away from you where it can no longer see you, this effect ends. Sickened: The target has disadvantage on attack rolls and ability checks. At the end of each of its turns, it can make another Wisdom saving throw. If it succeeds, the effect ends. 	t	1 action	{V,S}		Self	\N	6	up to 1 minute	Necromancy
256	2016-05-28 16:48:08.058562-04	2016-05-28 16:48:08.058756-04	Drawmij's Instant Summon (ritual)	You touch an object weighing 10 pounds or less whose longest dimension is 6 feet or less. The spell leaves an invisible mark on its surface and invisibly inscribes the name of the item on the sapphire you use as the material component. Each time you cast this spell, you must use a different sapphire.\n At any time thereafter, you can use your action to speak the item's name and crush the sapphire. The item instantly appears in your hand regardless of physical or planar distances, and the spell ends. If another creature is holding or carrying the item, crushing the sapphire doesn't transport the item to you, but instead you learn who the creature possessing the object is and roughly where that creature is located at that moment. Dispel magic or a similar effect successfully applied to the sapphire ends this spell's effect. 	f	1 minute	{V,S,M}	a sapphire worth 1,000 gp	Touch	\N	6		Conjuration
257	2016-05-28 16:48:08.05963-04	2016-05-28 16:48:08.059825-04	Disintegrate	A thin green ray springs from your pointing finger to a target that you can see within range. The target can be a creature, an object, or a creation of magical force, such as the wall created by Wall of Force.\n A creature targeted by this spell must make a Dexterity saving throw. On a failed save, the target takes 10d6+40 force damage. If this damage reduces the target to 0 hit points, it is disintegrated. A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust. The creature can be restored to life only by means of a true resurrection or a wish spell. This spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If the target is a Huge or larger object or creation of force, this spell disintegrates a 10-foot-cube portion of it. A magic item is unaffected by this spell. At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, the damage increases by 3d6 for each slot level above 6th. 	f	1 action	{V,S,M}	a lodestone and a pinch of dust	60 feet	\N	6	Instantaneous	Transmutation
258	2016-05-28 16:48:08.060707-04	2016-05-28 16:48:08.060918-04	Globe of Invulnerability	An immobile, faintly shimmering barrier springs into existence in a 10-foot radius around you and remains for the duration.\n Any spell of 5th level or lower cast from outside the barrier can't affect creatures or objects within it, even if the spell is cast using a higher level spell slot. Such a spell can target creatures and objects within the barrier, but the spell has no effect on them. Similarly, the area within the barrier is excluded from the areas affected by such spells. At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, the barrier blocks spells of one level higher for each slot level above 6th. 	t	1 action	{V,S,M}	a glass or crystal bead that shatters when the spell ends	Self (10-foot radius)	\N	6	up to 1 minute	Abjuration
345	2016-05-28 16:48:08.144204-04	2016-05-28 16:48:08.144378-04	Flame Blade	You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action.\n You can use your action to make a melee spell attack with the fiery blade. On a hit, the target takes 3d6 fire damage. The flaming blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for every two slot levels above 2nd. 	t	1 bonus action	{V,S,M}	leaf of sumac	Self	\N	2	up to 10 minutes	Evocation
259	2016-05-28 16:48:08.061725-04	2016-05-28 16:48:08.061915-04	Guards and Wards	You create a ward that protects up to 2,500 square feet of floor space (an area 50 feet square, or one hundred 5-foot squares or twenty-five 10-foot squares). The warded area can be up to 20 feet tall, and shaped as you desire. You can ward several stories of a stronghold by dividing the area among them, as long as you can walk into each contiguous area while you are casting the spell.\n When you cast this spell, you can specify individuals that are unaffected by any or all of the effects that you choose. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects. Guards and wards creates the following effects within the warded area. Corridors: Fog fills all the warded corridors, making them heavily obscured. In addition, at each intersection or branching passage offering a choice of direction, there is a 50 percent chance that a creature other than you will believe it is going in the opposite direction from the one it chooses. Doors: All doors in the warded area are magically locked, as if sealed by an arcane lock spell. In addition, you can cover up to ten doors with an illusion (equivalent to the illusory object function of the minor illusion spell) to make them appear as plain sections of wall. Stairs: Webs fill all stairs in the warded area from top to bottom, as the web spell. These strands regrow in 10 minutes if they are burned or torn away while guards and wards lasts. Other Spell Effect: You can place your choice of one of the following magical effects within the warded area of the stronghold. • Place dancing lights in four corridors. You can designate a simple program that the lights repeat as long as guards and wards lasts. • Place magic mouth in two locations. • Place stinking cloud in two locations. The vapors appear in the places you designate they return within 10 minutes if dispersed by wind while guards and wards lasts. • Place a constant gust of wind in one corridor or room. Place a suggestion in one location. You select an area of up to 5 feet square, and any creature that enters or passes through the area receives the suggestion mentally. The whole warded area radiates magic. A dispel magic cast on a specific effect, if successful, removes only that effect. You can create a permanently guarded and warded structure by casting this spell there every day for one year. 	f	10 minutes	{V,S,M}	burning incense, a small measure of brimstone and oil, a knotted string, a small amount of umber hulk blood, and a small silver rod worth at least 10 gp	Touch	\N	6	24 hours	Abjuration
260	2016-05-28 16:48:08.062912-04	2016-05-28 16:48:08.063108-04	Flesh to Stone	You attempt to turn one creature that you can see within range into stone. If the targets body is made of flesh, the creature must make a Constitution saving throw. On a failed save, it is restrained as its flesh begins to harden. On a successful save, the creature isn't affected.\n A creature restrained by this spell must make another Constitution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails saves three times, it is turned to stone and subjected to the petrified condition for the duration. The successes and failures don't need to be consecutive, keep track of both until the target collects three of a kind. If the creature is physically broken while petrified, it suffers from similar deformities if it reverts to its original state. If you maintain your concentration on this spell for the entire possible duration, the creature is turned to stone until the effect is removed. 	t	1 action	{V,S,M}	a pinch of lime, water, and earth	60 feet	\N	6	up to 1 minute	Transmutation
261	2016-05-28 16:48:08.063949-04	2016-05-28 16:48:08.06413-04	Magic Jar	Your body falls into a catatonic state as your soul leaves it and enters the container you used for the spell's material component. While your soul inhabits the container, you are aware of your surroundings as if you were in the container's space. You can't move or use reactions. The only action you can take is to project your soul up to 100 feet out of the container, either returning to your living body (and ending the spell) or attempting to possess a humanoids body.\n You can attempt to possess any humanoid within 100 feet of you that you can see (creatures warded by a protection from evil and good or magic circle spells can't be possessed). The target must make a Charisma saving throw. On a failure, your soul moves into the target's body, and the target's soul becomes trapped in the container. On a success, the target resists your efforts to possess it, and you can't attempt to possess it again for 24 hours. Once you possess a creature's body, you control it. Your game statistics are replaced by the statistics of the creature though you retain your alignment and your Intelligence, Wisdom, and Charisma scores. You retain the benefit of your own class feature. If the target has any class levels, you can't use any of its class features. Meanwhile, the possessed creature's soul can perceive from the container using its own senses, but it can't move or take actions at all. While possessing a body, you can use your action to return from the host body to the container if it is within 100 feet of you, returning the host creature's soul to its body. If the host body dies while you're in it, the creature dies, and you must make a Charisma saving throw against your own spellcasting DC. On a success, you return to the container if it is within 100 feet of you. Otherwise, you die. If the container is destroyed or the spell ends, your soul immediately returns to your body. If your body is more than 100 feet away from you, or if your body is dead when you attempt to return to it, you die. If another creature's soul is in the container when it is destroyed, the creature's soul returns to its body if the body is alive and within 100 feet. Otherwise, that creature dies. When the spell ends, the container is destroyed. 	f	1 minute	{V,S,M}	a gem, crystal, reliquary, or some other ornamental container worth at least 500 gp	Self	\N	6		Necromancy
262	2016-05-28 16:48:08.064961-04	2016-05-28 16:48:08.065149-04	Mass Suggestion	(a snake's tongue and either a bit of honeycomb or a drop of sweet oil)You suggest a course of activity (limited to a sentence or two) and magically influence up to twelve creatures of your choice that you can see within range and that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act automatically negates the effect of the spell.\n Each target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do. You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a group of soldiers give all their money to the first beggar they meet. If the condition isn't met before the spell ends, the activity isn't performed. If you or any of your companions damage a creature affected by this spell, the spell ends for that creature. At Higher Levels: When you cast this spell using a 7th-level spell slot, the duration is 10 days. When you use an 8th-level spell slot, the duration is 30 days. When you use a 9th-level spell slot, the duration is a year and a day. 	f	1 action	{V,M}		60 feet	\N	6	24 hours	Enchantment
263	2016-05-28 16:48:08.065894-04	2016-05-28 16:48:08.066085-04	Otiluke's Freezing Sphere	A frigid globe of cold energy streaks from your fingertips to a point of your choice within range, where it explodes in a 60-foot-radius sphere. Each creature within the area must make a Constitution saving throw. On a failed save, a creature takes 10d6 cold damage. On successful save, it takes half as much damage.\n If the globe strikes a body of water or a liquid that is principally water (not including water-based creatures), it freezes the liquid to a depth of 6 inches over an area 30 feet square. This ice lasts for 1 minute. Creatures that were swimming on the surface of frozen water are trapped in the ice. A trapped creature can use an action to make a Strength check against your spell save DC to break free. You can refrain from firing the globe after completing the spell, if you wish. A small globe about the size of a sling stone, cool to the touch, appears in your hand. At any time, you or a creature you give the globe to can throw the globe (to a range of 40 feet) or hurl it with a sling (to the sling's normal range). It shatters on impact, with the same effect as the normal casting of the spell. You can also set the globe down without shattering it. After 1 minute, if the globe hasn't already shattered, it explodes. At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d6 for each slot level above 6th 	f	1 action	{V,S,M}	a small crystal sphere	300 feet	\N	6	Instantaneous	Evocation
264	2016-05-28 16:48:08.067148-04	2016-05-28 16:48:08.067371-04	Move Earth	(an iron blade and a small bag containing a mixture of soils - clay, loam, and sand)Choose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area's elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can't exceed half the area's largest dimension. So, if you affect a 40-foot square, you can create a pillar up to 20 feet high, raise or lower the square's elevation by up to 20 feet, dig a trench up to 20 feet deep, and so on. It takes 10 minutes for these changes to complete.\n At the end of every 10 minutes you spend concentrating on the spell, you can choose a new area of terrain to affect. Because the terrain's transformation occurs slowly, creatures in the area can't usually be trapped or injured by the ground's movement. This spell can't manipulate natural stone or stone construction. Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse. Similarly, this spell doesn't directly affect plant growth. The moved earth carries any plants along with it. 	t	1 action	{V,S,M}		120 feet	\N	6	up to 2 hours	Transmutation
265	2016-05-28 16:48:08.068303-04	2016-05-28 16:48:08.06852-04	Sunbeam	A beam of brilliant light flashes out from your hand in a 5-foot-wide, 60-foot-line. Each creature in the line must make a Constitution saving throw. On a failed save, a creature takes 6d8 radiant damage and is blinded until your next turn. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw.\n You can create a new line of radiance as your action on any turn until the spell ends. For the duration, a mote of brilliant radiance shines in your hand. It sheds bright light in a 30-foot radius and dim light for an additional 30 feet. The light is sunlight. 	t	1 action	{V,S,M}	a magnifying glass	Self (60-foot line)	\N	6	up to 1 minute	Evocation
266	2016-05-28 16:48:08.069285-04	2016-05-28 16:48:08.069482-04	Wall of Ice	You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a sphere with radium of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and lasts for the duration.\n If the wall cuts through a creature's space when it appears, the creature within its area is pushed to one side of the wall and must make a Dexterity saving throw. On a failed save, the creature takes 10d6 cold damage, or half as much damage on a successful save. The wall is an object that can be damaged and thus breached. It has AC 12 and 30 hit points per 10-foot section, and it is vulnerable to fire damage. Reducing a 10-foot section of wall to 0 hit points destroys it and leaves behind a sheet of frigid air in the space the wall occupied. A creature moving through the sheet of frigid air for the first time on a turn must make a Constitution saving throw. The creature takes 5d6 cold damage on a failed save, or half as much damage on a successful one. At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, the damage the wall deals when it appears increases by 2d6, and the damage from passing through the sheet of frigid air increases by 1d6 for each slot level above 6th. 	t	1 action	{V,S,M}	a small piece of quartz	120 feet	\N	6	up to 10 minutes	Evocation
267	2016-05-28 16:48:08.07022-04	2016-05-28 16:48:08.070408-04	Investiture of Ice	Until the spell ends, ice rimes your body, and you gain the following benefits.	t	1 action	{V,S}		Self	\N	6	up to 10 minutes	Transmutation
268	2016-05-28 16:48:08.071155-04	2016-05-28 16:48:08.071334-04	Otto's Irresistible Dance	Choose one creature that you can see within range. The target begins a comic dance in place - shuffling, tapping its feet, and capering for the duration. Creatures that can't be charmed are immune to this spell.\n A dancing creature must use all its movement to dance without leaving its space and has disadvantage on Dexterity saving throws and attack rolls. While the target is affected by this spell, other creatures have advantage on attack rolls against it. As an action, a dancing creature makes a Wisdom saving throw to regain control of itself. On a successful save, the spell ends. 	t	1 action	{V}		30 feet	\N	6	up to 1 minute	Enchantment
269	2016-05-28 16:48:08.072058-04	2016-05-28 16:48:08.072236-04	Bones of the Earth	You cause up to six pillars of stone to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 30 hit points. When reduced to 0 hit points, a pillar crumbles into rubble, which creates an area of difficult terrain with a 10-foot radius. The rubble lasts until cleared.	f	1 action	{V,S}		120 feet	\N	6	Instantaneous	Transmutation
270	2016-05-28 16:48:08.072967-04	2016-05-28 16:48:08.07315-04	Investiture of Stone	Until the spell ends, bits of rock spread across your body, and you gain the following benefits.	t	1 action	{V,S}		Self	\N	6	up to 10 minutes	Transmutation
271	2016-05-28 16:48:08.073977-04	2016-05-28 16:48:08.074177-04	Primordial Ward	You have resistance to acid, cold, fire, lightning, and thunder damage for the spell's duration.	t	1 action	{V,S}		Self	\N	6	up to 1 minute	Abjuration
272	2016-05-28 16:48:08.0749-04	2016-05-28 16:48:08.07508-04	Investiture of Flame	Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the spell's duration. The flames don't harm you. Until the spell ends, you gain the following benefits.	t	1 action	{V,S}		Self	\N	6	up to 10 minutes	Transmutation
273	2016-05-28 16:48:08.075788-04	2016-05-28 16:48:08.075971-04	Investiture of Wind	Until the spell ends, wind whirls around you, and you gain the following benefits.	t	1 action	{V,S}		Self	\N	6	up to 10 minutes	Transmutation
274	2016-05-28 16:48:08.076651-04	2016-05-28 16:48:08.076832-04	Mirage Arcane	You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain. The terrain's general shape remains the same, however. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road.\n Similarly, you can alter the appearance of structures, or add them where none are present. The spell doesn't disguise, conceal, or add creatures. The illusion includes audible, visual, tactile, and olfactory elements, so it can turn clear ground into difficult terrain (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spell's area disappears immediately. Creatures with truesight can see through the illusion to the terrain's true form, however, all other elements of the illusion remain, so while the creature is aware of the illusion's presence, the creature can still physically interact with the illusion. 	f	10 minutes	{V,S}		Sight	\N	7	10 days	Illusion
275	2016-05-28 16:48:08.077585-04	2016-05-28 16:48:08.077767-04	Delayed Blast Fireball	A beam of yellow light flashes from your pointing finger, then condenses to linger at a chosen point within range as a glowing bead for the duration. When the spell ends, either because your concentration is broken or because you decide to end it, the bead blossoms with a low roar into an explosion of flame that spreads around corners. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes fire damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one.\n The spell's base damage is 12d6. If at the end of your turn the bead has not yet detonated, the damage increases by 1d6. If the glowing bead is touched before the interval has expired, the creature touching it must make a Dexterity saving throw. On a failed save, the spell ends immediately, causing the bead to erupt in flame. On a successful save, the creature can throw the bead up to 40 feet. When it strikes a creature or a solid object, the spell ends, and the bead explodes. The fire damages objects in the area and ignites flammable objects that aren't being worn or carried. At Higher Levels: When you cast this spell using a spell slot of 8th level or higher, the base damage increases by 1d6 for each slot level above 7th. 	t	1 action	{V,S,M}	a tine ball of bat guano and sulfur	150 feet	\N	7	up to 1 minute	Evocation
276	2016-05-28 16:48:08.078566-04	2016-05-28 16:48:08.078742-04	Finger of Death	You send negative energy coursing through a creature that you can see within range, causing it searing pain. The target must make a Constitution saving throw. It takes 7d8+30 necrotic damage on a failed save, or half as much damage on a successful one.\n A humanoid killed by this spell rises at the start of your next turn as a zombie that is permanently under your command, following your verbal orders to the best of its ability. 	f	1 action	{V,S}		60 feet	\N	7	Instantaneous	Necromancy
277	2016-05-28 16:48:08.079444-04	2016-05-28 16:48:08.079632-04	Mordenkainen's Sword	You create a sword-shaped plane of force that hovers within range. It lasts for the duration.\n When the sword appears, you make a melee spell attack against a target of your choice within 5 feet of the sword. On a hit. the target takes 3d10 force damage. Until the spell ends, you can use a bonus action on each of your turns to move the sword up to 20 feet to a spot you can see and repeat this attack against the same target or a different one. 	t	1 action	{V,S,M}	a miniature platinum sword with a grip and pommel of copper and zinc, worth 250 gp	60 feet	\N	7	up to 1 minute	Evocation
278	2016-05-28 16:48:08.080452-04	2016-05-28 16:48:08.080663-04	Clone	(a diamond worth at least 1,000 gp and at least 1 cubic inch of flesh of the creature that is to be cloned, which the spell consumes, and a vessel worth at least 2,000 gp that has a sealable lid and is large enough to hold a Medium creature, such as a huge urn, coffin, mud-filled cyst in the ground, or crystal container filled with salt water)This spell grows an inert duplicate of a living creature as a safeguard against death. This clone forms inside as a sealed vessel and grows to full size and maturity after 120 days you can also choose to have the clone be a younger version of the same creature. It remains inert and endures indefinitely, as long as its vessel remains undisturbed.\n At any time after the clone matures, if the original creature dies, its soul transfers to the clone, provided that the soul is free and willing to return. The clone is physically identical to the original and has the same personality, memories, and abilities, but none of the original's equipment. The original creature's physical remains, if they still exist, become inert and can't thereafter be restored to life, since the creature's soul is elsewhere. 	f	1 hour	{V,S,M}		Touch	\N	8	Instantaneous	Necromancy
279	2016-05-28 16:48:08.081439-04	2016-05-28 16:48:08.081623-04	Weird	Drawing on the deepest fears of a group of creatures, you create illusory creatures in their minds, visible only to them. Each creature in a 30-foot-radius sphere centered on a point of your choice within range must make a Wisdom saving throw. On a failed save, a creature becomes frightened for the duration. The illusion calls on the creature's deepest fears, manifesting its worst nightmares as an implacable threat. At the end of each of the frightened creature's turns, it must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends for that creature.	t	1 action	{V,S}		120 feet	\N	9	up to 1 minute	Illusion
280	2016-05-28 16:48:08.082322-04	2016-05-28 16:48:08.082505-04	Demiplane	You create a shadowy door on a flat solid surface that you can see within range. The door is large enough to allow Medium creatures to pass through unhindered. When opened, the door leads to a demiplane that appears to be an empty room 30 feet in each dimension, made of wood or stone. When the spell ends, the door disappears, and any creatures or objects inside the demiplane remain trapped there, as the door also disappears from the other side.\n Each time you cast this spell, you can create a new demiplane, or have the shadowy door connect to a demiplane you created with a previous casting of this spell. Additionally, if you know the nature and contents of a demiplane created by a casting of this spell by another creature, you can have the shadowy door connect to its demiplane instead. 	f	1 action	{S}		60 feet	\N	8	1 hour	Conjuration
281	2016-05-28 16:48:08.083233-04	2016-05-28 16:48:08.08341-04	Wish	Wish is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality in accord with your desires.\n The basic use of this spell is to duplicate any other spell of or lower. You don't need to meet any requirements in that spell, including costly components. The spell simply takes effect. Alternatively, you can create one of the following effects of your choice. • You create one object of up to 25,000 gp in value that isn't a magic item. The object can be no more than 300 feet in any dimension, and it appears in an unoccupied space you can see on the ground. • You allow up to twenty creatures that you can see to regain all hit points, and you end all effects on them described in the greater restoration spell. • You grant up to ten creatures that you can see resistance to a damage type you choose. • You grant up to ten creatures you can see immunity to a single spell or other magical effect for 8 hours. For instance, you could make yourself and all your companions immune to a lich's life drain attack. • You undo a single recent event by forcing a reroll of any roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a wish spell could undo an opponent's successful save, a foe's critical hit, or a friend's failed save. You can force the reroll to be made with advantage or disadvantage, and you can choose whether to use the reroll or the original roll. You might be able to achieve something beyond the scope of the above examples. State your wish to the DM as precisely as possible. The DM has great latitude in ruling what occurs in such an instance, the greater the wish, the greater the likelihood that something goes wrong. This spell might simply fail, the effect you desire might only be partly achieved, or you might suffer some unforeseen consequence as a result of how you worded the wish. For example, wishing that a villain were dead might propel you forward in time to a period when that villain is no longer alive, effectively removing you from the game. Similarly, wishing for a legendary magic item or artifact might instantly transport you to the presence of the item's current owner. The stress of casting this spell to produce any effect other than duplicating another spell weakens you. After enduring that stress, each time you cast a spell until you finish a long rest, you take 1d10 necrotic damage per level of that spell. This damage can't be reduced or prevented in any way. In addition, your Strength drops to 3, if it isn't 3 or lower already, for 2d4 days. For each of those days that you spend resting and doing nothing more than light activity, your remaining recovery time decreases by 2 days. Finally, there is a 33 percent chance that you are unable to cast wish ever again if you suffer this stress. 	f	1 action	{V,S,M}		Self	\N	9	Instantaneous	Conjuration
282	2016-05-28 16:48:08.084285-04	2016-05-28 16:48:08.084478-04	Mordenkainen's Magnificent Mansion	You conjure an extradimensional dwelling in range that lasts for the duration. You choose where its one entrance is located. The entrance shimmers faintly and is 5 feet wide and 10 feet tall. You and any creature you designate when you cast the spell can enter the extradimensional dwelling as long as the portal remains open. You can open or close the portal if you are within 30 feet of it. While closed, the portal is invisible.\n Beyond the portal is a magnificent foyer with numerous chambers beyond. The atmosphere is clean, fresh, and warm. You can create any floor plan you like, but the space can't exceed 50 cubes, each cube being 10 feet on each side. The place is furnished and decorated as you choose. It contains sufficient food to serve a nine course banquet for up to 100 people. A staff of 100 near-transparent servants attends all who enter. You decide the visual appearance of these servants and their attire. They are completely obedient to your orders. Each servant can perform any task a normal human servant could perform, but they can't attack or take any action that would directly harm another creature. Thus the servants can fetch things, clean, mend, fold clothes, light fires, serve food, pour wine, and so on. The servants can go anywhere in the mansion but can't leave it. Furnishings and other objects created by this spell dissipate into smoke if removed from the mansion. When the spell ends, any creatures inside the extradimensional space are expelled into the open spaces nearest to the entrance. 	f	1 minute	{V,S,M}	a miniature portal carved from ivory, a small piece of polished marble, and a tiny silver spoon, each item worth at least 5 gp	300 feet	\N	7	24 hours	Conjuration
283	2016-05-28 16:48:08.085178-04	2016-05-28 16:48:08.085351-04	Reverse Gravity	This spell reverses gravity in a 50-foot-radius, 100-foot high cylinder centered on a point within range. All creatures and objects that aren't somehow anchored to the ground in the area fall upward and reach the top of the area when you cast this spell. A creature can make a Dexterity saving throw to grab onto a fixed object it can reach, thus avoiding the fall.\n If some solid object (such as a ceiling) is encountered in this fall, falling objects and creatures strike it just as they would during a normal downward fall. If an object or creature reaches the top of the area without striking anything, it remains there, oscillating slightly, for the duration. At the end of the duration, affected objects and creatures fall back down. 	t	1 action	{V,S,M}	a lodestone and iron filings	100 feet	\N	7	up to 1 minute	Transmutation
284	2016-05-28 16:48:08.086068-04	2016-05-28 16:48:08.086244-04	Project Image	You create an illusory copy of yourself that lasts for the duration. The copy can appear at any location within range that you have seen before, regardless of intervening obstacles. The illusion looks and sounds like you but is intangible. If the illusion takes any damage, it disappears, and the spell ends.\n You can use your action to move this illusion up to twice your speed, and make it gesture, speak, and behave in whatever way you choose. It mimics your mannerisms perfectly. You can see through its eyes and hear through its ears as if you were in its space. On your turn as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings. Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature. 	t	1 action	{V,S,M}	a small replica of you made from materials worth at least 5 gp	500 miles	\N	7	up to 1 day	Illusion
285	2016-05-28 16:48:08.086925-04	2016-05-28 16:48:08.087101-04	Sequester	By means of this spell, a willing creature or an object can be hidden away, safe from detection for the duration. When you cast the spell and touch the target, it becomes invisible and can't be targeted by divination spells or perceived through scrying sensors created by the divination of spells.\n If the target is a creature, it falls into a state of suspended animation. Time ceases to flow for it, and it doesn't grow older. You can set a condition for the spell to end early. The condition can be anything you choose, but it must occur or be visible within 1 mile of the target. Examples include after 1,000 years or when the tarrasque awakes. This spells also ends if the target takes any damage. 	f	1 action	{V,S,M}	a powder composed of diamond, emerald, ruby, and sapphire dust worth at least 5,000 gp, which the spell consumes	Touch	\N	7		Transmutation
286	2016-05-28 16:48:08.08778-04	2016-05-28 16:48:08.087953-04	Sunburst	Brilliant sunlight flashes in a 60-foot radius centered on a point you choose within range. Each creature in that light must make a Constitution saving throw. On a failed save, a creature takes 12d6 radiant damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw.\n A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded. This spell dispels any darkness in its area that was created by a spell. 	f	1 action	{V,S,M}	fire and a piece of sunstone	150 feet	\N	8	Instantaneous	Evocation
287	2016-05-28 16:48:08.088644-04	2016-05-28 16:48:08.08882-04	Mind Blank	Until the spell ends, one willing creature you touch is immune to psychic damage, any effect that would sense its emotions or read its thoughts, divination spells, and the charmed condition. The spell even foils wish spells and spells or effects of similar power used to affect the target's mind or to gain information about the target.	f	1 action	{V,S}		Touch	\N	8	24 hours	Abjuration
288	2016-05-28 16:48:08.089492-04	2016-05-28 16:48:08.089672-04	Power Word Stun	You speak a word of power that can overwhelm the mind of one creature you can see within range, leaving it dumbfounded. If the target has 150 hit points or fewer, it is stunned. Otherwise, the spell has no effect.\n The stunned target must make a Constitution saving throw at the end of each of its turns. On a successful save, this stunning effect ends. 	f	1 action	{V}		60 feet	\N	8	Instantaneous	Enchantment
289	2016-05-28 16:48:08.090385-04	2016-05-28 16:48:08.090583-04	Simulacrum	(snow or ice in quantities sufficient to made a life-size copy of the duplicated creature some hair, fingernail clippings, or other piece of that creature's body placed inside the snow or ice and powdered ruby worth 1,500 gp, sprinkled over the duplicate and consumed by the spell)You shape an illusory duplicate of one beast or humanoid that is within range for the entire casting time of the spell. The duplicate is a creature, partially real and formed from ice or snow, and it can take actions and otherwise be affected as a normal creature. It appears to be the same as the original, but it has half the creature's hit point maximum and is formed without any equipment. Otherwise, the illusion uses all the statistics of the creature it duplicates.\n The simulacrum is friendly to you and creatures you designate. It obeys your spoken commands, moving and acting in accordance with your wishes and acting on your turn in combat. The simulacrum lacks the ability to learn or become more powerful, so it never increases its level or other abilities, nor can it regain expended spell slots. If the simulacrum is damaged, you can repair it in an alchemical laboratory, using rare herbs and minerals worth 100 gp per hit point it regains. The simulacrum lasts until it drops to 0 hit points, at which point it reverts to snow and melts instantly. If you cast this spell again, any currently active duplicates you created with this spell are instantly destroyed. 	f	12 hours	{V,S,M}		Touch	\N	7		Illusion
290	2016-05-28 16:48:08.091497-04	2016-05-28 16:48:08.0917-04	Teleport	This spell instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be able to fit entirely inside a 10-foot cube, and it can't be held or carried by an unwilling creature. The destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The DM rolls d100 and consults the table.\n Familiarity - Mishap - Similar Area - Off Target - On Target Permanent Circle - x - x - x - 01-100 Associated Object - x - x - x - 01-100 Very Familiar - 01-05 - 06-13 - 14-24 - 25-100 Seen Casually - 01-33 - 34-43 - 44-53 - 54-100 Viewed Once - 01-43 - 44-53 - 54-73 - 74-100 Description - 01-43 - 44-53 - 54-73 - 74-100 False Description - 01-50 - 51-100 - x - x Familiarity: "Permanent Circle" means a permanent teleportation circle whose sigil sequence you know. "Associated Object" means that you possess an object taken from the desired destination within the last six months, such as a book from a wizard's library, bed linen from a royal suite, or a chunk of marble from a Lich's secret tomb. "Very Familiar" is a place you have been very often, a place you have carefully studied, or a place you can see when you cast the spell. "Seen Casually" is some place you have seen more than once but with which you aren't very familiar. "Viewed Once" is a place you have seen once, possibly using magic. "Description" is a place whose location and appearance you know through someone else's description, perhaps from a map. "False Description" is a place that doesn't exist. Perhaps you tried to scry an enemy's sanctum but instead viewed an illusion, or you are attempting to teleport to a familiar location that no longer exists. On Target: You and your group (or the target object) appear where you want to go. Off Target: You and your group (or the target object) appear a random distance away from the destination in a random direction. Distance off target is 1d10 x 1d10 percent of the distance that was to be travelled. For example, if you tried to travel 120 miles, landed off target, and rolled a 5 and 3 on the two d10s, then you would be off target by 15 percent, or 18 miles. The DM determines the direction off target randomly by rolling a d8 and designating 1 as north, 2 as north-east, 3 as east, and so on around the points of the compass. If you were teleporting to a coastal city and wound up 18 miles out at sea, you could be in trouble. Similar Area: You and your group (or the target object) wind up in a different area that's visually or thematically similar to the target area. If you are heading for your home laboratory, for example, you might wind up in another wizard's laboratory or in an alchemical supply shop that has many of the same tools and implements as your laboratory. Generally, you appear in the closest similar place, but since the spell has no range limit, you could conceivably wind up anywhere on the plane. Mishap: The spell's unpredictable magic results in a difficult journey. Each teleporting creature (or the target object) takes 3d10 force damage and the DM rerolls on the table to see where you wind up (multiple mishaps can occur, dealing damage each time). 	f	1 action	{V}		10 feet	\N	7	Instantaneous	Conjuration
314	2016-05-28 16:48:08.113662-04	2016-05-28 16:48:08.113832-04	Creation	You pull wisps of shadow material from the Shadowfell to create a nonliving object of vegetable matter within range - soft goods, rope, wood, or something similar. You can also use this spell to create mineral objects such as stone, crystal, or metal. The object created must be no larger than a 5-foot cube, and the object must be of a form and material that you have seen before.\n The duration depends on the object's material. If the object is composed of multiple materials, use the shortest duration. Material - Duration: Vegetable matter - 1 day Stone/crystal - 12 hours Precious metals - 1 hour Gems - 10 minutes Adamantine/Mithral - 1 minute Using any material created by this spell as another spell's material component causes that spell to fail. At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the cube increases by 5 feet for each slot level above 5th. 	f	1 minute	{V,S,M}	a tiny piece of matter of the same type of the item you plan to create	30 feet	\N	5		Illusion
291	2016-05-28 16:48:08.092582-04	2016-05-28 16:48:08.092775-04	Antimagic Field	A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can't be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you.\n Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can't protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesn't function, but the time it spends suppressed counts against its duration. Targeted Effects: Spells and other magical effects, such as magic missile and charm person, that target a creature or an object in the sphere have no effect on that target. Areas of Magic: The area of another spell or magical effect, such as fireball, can't extend into the sphere. If the sphere overlaps an area of magic, the part of the area that is covered by the sphere is suppressed. For example, the flames created by a wall of fire are suppressed within the sphere, creating a gap in the wall if the overlap is large enough. Spells: Any active spell or other magical effect on a creature or an object in the sphere is suppressed while the creature or object is in it. Magic Items: The properties and powers of magic items are suppressed in the sphere. For example, a +1 long sword in the sphere functions as a nonmagical long sword. A magic weapon's properties and powers are suppressed if it is used against a target in the sphere or wielded by an attacker in the sphere. If a magic weapon or piece of magic ammunition fully leaves the sphere (For example, if you fire a magic arrow or throw a magic spear at a target outside the sphere), the magic of the item ceases to be suppressed as soon as it exits. Magical Travel: Teleportation and planar travel fail to work in the sphere, whether the sphere is the destination or the departure point for such magical travel. A portal to another location, world, or plane of existence, as well as an opening to an extradimensional space such as that created by the rope trick spells, temporarily closes while in the sphere. Creatures and Objects: A creature or object summoned or created by magic temporarily winks out of existence in the sphere. Such a creature instantly reappears once the space the creature occupied is no longer within the sphere. Dispel Magic: Spells and magical effects such as dispel magic have no effect on the sphere. Likewise, the spheres created by different antimagic field spells don't nullify each other. 	t	1 action	{V,S,M}	a pinch of powdered iron or iron filings	Self (10-foot-radius sphere)	\N	8	up to 1 hour	Abjuration
292	2016-05-28 16:48:08.093615-04	2016-05-28 16:48:08.0938-04	Telepathy	You create a telepathic link between yourself and a willing creature with which you are familiar. The creature can be anywhere on the same plane of existence as you. The spell ends if you or the target are no longer on the same plane.\n Until the spell ends, you and the target can instantaneously share words, images, sounds, and other sensory messages with one another through the link, and the target recognizes you as the creature it is communicating with. The spell enables a creature with an Intelligence score of at least 1 to understand the meaning of your words and take in the scope of any sensory messages you send to it. 	f	1 action	{V,S,M}	a pair of linked silver rings	Unlimited	\N	8	24 hours	Evocation
293	2016-05-28 16:48:08.094505-04	2016-05-28 16:48:08.09468-04	Whirlwind	A whirlwind howls down to a point on the ground you specify. The whirlwind is a 10-foot-radius, 30-foot-high cylinder centered on that point. Until the spell ends, you can use your action to move the whirlwind up to 30 feet in any direction along the ground. The whirlwind sucks up any Medium or smaller objects that aren't secured to anything and that aren't worn or carried by anyone.	t	1 action	{V,M}	a piece of straw	300 feet	\N	7	up to 1 minute	Evocation
294	2016-05-28 16:48:08.095338-04	2016-05-28 16:48:08.095507-04	Abi-Dalzim's Horrid Wilting	You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 10d8 necrotic damage on a failed save, or half as much damage on a successful one.	f	1 action	{V,S,M}	a bit of sponge	150 feet	\N	8	Instantaneous	Necromancy
295	2016-05-28 16:48:08.096175-04	2016-05-28 16:48:08.096348-04	Feeblemind	You blast the mind of a creature that you can see within range, attempting to shatter its intellect and personality. The target takes 4d6 psychic damage and must make an Intelligence saving throw.\n On a failed save, the creature's Intelligence and Charisma scores become 1. The creature can't cast spells, activate magic items, understand language, or communicate in any intelligible way. The creature can, however, identify its friends, follow them, and even protect them. At the end of every 30 days, the creature can repeat its saving throw against this spell. If it succeeds on its saving throw, the spell ends. The spell can also be ended by greater restoration, heal or wish. 	f	1 action	{V,S,M}	a handful of clay, crystal, glass, or mineral spheres	150 feet	\N	8	Instantaneous	Enchantment
296	2016-05-28 16:48:08.097056-04	2016-05-28 16:48:08.097313-04	Maze	You banish a creature that you can see within range into a labyrinthine demiplane. The target remains there for the duration or until it escapes the maze.\n The target can use its action to attempt to escape. When it does so, it makes a DC 20 Intelligence check. If it succeeds, it escapes, and the spell ends (a minotaur or goristro demon automatically succeeds). When the spell ends, the target reappears in the space it left or, if that space is occupied, in the nearest unoccupied space. 	t	1 action	{V,S}		60 feet	\N	8	up to 10 minutes	Conjuration
297	2016-05-28 16:48:08.098085-04	2016-05-28 16:48:08.098281-04	Dominate Monster	You attempt to beguile a creature that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.\n While the creature is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as Attack that creature, Run over there, or Fetch that object. If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability. You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends. At Higher Levels: When you cast this spell with a 9th-level spell slot, the duration is concentration, up to 8 hours. 	t	1 action	{V,S}		60 feet	\N	8	up to 1 hour	Enchantment
298	2016-05-28 16:48:08.099012-04	2016-05-28 16:48:08.099195-04	Incendiary Cloud	A swirling cloud of smoke shot through with white-hot embers appears in a 20-foot-radius sphere centered on a point within range. The cloud spreads around corners and is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.\n When the cloud appears, each creature in it must make a Dexterity saving throw. A creature takes 10d8 fire damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there. The cloud moves 10 feet directly away from you in a direction that you choose at the start of each of your turns. 	t	1 action	{V,S}		150 feet	\N	8	up to 1 minute	Conjuration
299	2016-05-28 16:48:08.099889-04	2016-05-28 16:48:08.100065-04	Astral Projection	You and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell fails and the casting is wasted if you are already on that plane). The material body you leave behind is unconscious and in a state of suspended animation, it doesn't need food or air and doesn't age.\n Your astral body resembles your mortal form in almost every way, replicating your game statistics and possessions. The principal difference is the addition of a silvery cord that extends from between your shoulder blades and trails behind you, fading to invisibility after 1 foot. This cord is your tether to your material body. As long as the tether remains intact, you can find your way home. If the cord is cut-something that can happen only when an effect specifically states that it does-your soul and body are separated, killing you instantly. Your astral form can freely travel through the Astral Plane and can pass through portals there leading to any other plane. If you enter a new plane or return to the plane you were on when casting this spell, your body and possessions are transported along the silver cord, allowing you to re-enter your body as you enter the new plane. Your astral form is a separate incarnation. Any damage or other effects that apply to it have no effect on your physical body, nor do they persist when you return to it. The spell ends for you and your companions when you use your action to dismiss it. When the spell ends, the affected creature returns to its physical body, and it awakens. The spell might also end early for you or one of your companions. A successful dispel magic spell used against an astral or physical body ends the spell for that creature. If a creature's original body or its astral form drops to 0 hit points, the spell ends for that creature. If the spell ends and the silver cord is intact, the cord pulls the creature's astral form back to its body, ending its state of suspended animation. If you are returned to your body prematurely, your companions remain in their astral forms and must find their own way back to their bodies, usually by dropping to 0 hit points. 	f	1 hour	{V,S,M}	for each creature you affect with this spell, you must provide one jacinth worth at least 1,000 gp and one ornately carved bar of silver worth at least 100 gp, all of which the spell consumes	10 feet	\N	9		Necromancy
300	2016-05-28 16:48:08.100911-04	2016-05-28 16:48:08.101101-04	Foresight	You touch a willing creature and bestow a limited ability to see into the immediate future. For the duration, the target can't be surprised and has advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against the target for the duration.\n This spell immediately ends if you cast it again before its duration ends. 	f	1 minute	{V,S,M}	a hummingbird feather	Touch	\N	9	8 hours	Divination
301	2016-05-28 16:48:08.101781-04	2016-05-28 16:48:08.101956-04	Prismatic Wall	A shimmering, multicolored plane of light forms a vertical opaque wall - up to 90 feet long, 30 feet high, and 1 inch thick - entered on a point you can see within range. Alternatively, you can shape the wall into a sphere up to 30 feet in diameter centered on a point you choose within range.\n The wall remains in place for the duration. If you position the wall so that it passes through a space occupied by a creature, the spell fails, and your action and the spell slot are wasted. The wall sheds bright light out to a range of 100 feet and dim light for an additional 100 feet. You and creatures you designate at the time you cast the spell can pass through and remain near the wall without harm. If another creature that can see the wall moves to within 20 feet of it or starts its turn there, the creature must succeed on a Constitution saving throw or become blinded for 1 minute. The wall consists of seven layers, each with a different color. When a creature attempts to reach into or pass through the wall, it does so one layer at a time through all the wall's layers. As it passes or reaches through each layer, the creature must make a Dexterity saving throw or be affected by that layer's properties as described below. The wall can be destroyed, also one layer at a time, in order from red to violet, by means specific to each layer. Once a layer is destroyed, it remains so for the duration of the spell. A rod of cancellation destroys a prismatic wall, but an antimagic field has no effect on it. Red: The creature takes 10d6 fire damage on a failed save, or half as much damage on a successful one. While this layer is in place, nonmagical ranged attacks can't pass through the wall. The layer can be destroyed by dealing at least 25 cold damage to it. Orange: The creature takes 10d6 acid damage on a failed save, or half as much damage on a successful one. While this layer is in place, magical ranged attacks can't pass through the wall. The layer is destroyed by a strong wind. Yellow: The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 60 force damage to it. Green: The creature takes 10d6 poison damage on a failed save, or half as much damage on a successful one. A passwall spell, or another spell of equal or greater level that can open a portal on a solid surface, destroys this layer. Blue: The creature takes 10d6 cold damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 25 fire damage to it. Indigo: On a failed save, the creature is restrained. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures don't need to be consecutive, keep track of both until the creature collects three of a kind. While this layer is in place, spells can't be cast through the wall. The layer is destroyed by bright light shed by a daylight spell or a similar spell of equal or higher level. Violet: On a failed save, the creature is blinded. It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of the DM's choosing and is no longer blinded. (Typically, a creature that is on a plane that isn't its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.) This layer is destroyed by a dispel magic spell or a similar spell of equal or higher level that can end spells and magical effects. 	f	1 action	{V,S}		60 feet	\N	9	10 minutes	Abjuration
302	2016-05-28 16:48:08.102809-04	2016-05-28 16:48:08.103064-04	Meteor Swarm	Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creature takes 20d6 fire damage and 20d6 bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery burst is affected only once.\n The spell damages objects in the area and ignites flammable objects that aren't being worn or carried. 	f	1 action	{V,S}		1 mile	\N	9	Instantaneous	Evocation
303	2016-05-28 16:48:08.103793-04	2016-05-28 16:48:08.103971-04	Imprisonment	You create a magical restraint to hold a creature that you can see within range. The target must succeed on a Wisdom saving throw or be bound by the spell, if it succeeds, it is immune to this spell if you cast it again. While affected by this spell, the creature doesn't need to breathe, eat, or drink, and it doesn't age. Divination spells can't locate or perceive the target.\n When you cast the spell, you choose one of the following forms of imprisonment. Burial: The target is entombed far beneath the earth in a sphere of magical force that is just large enough to contain the target. Nothing can pass through the sphere, nor can any creature teleport or use planar travel to get into or out of it. The special component for this version of the spell is a small mithral orb. Chaining: Heavy chains, firmly rooted in the ground, hold the target in place. The target is restrained until the spell ends, and it can't move or be moved by any means until then. The special component for this version of the spell is a fine chain of precious metal. Hedged Prison: The spell transports the target into a tiny demiplane that is warded against teleportation and planar travel. The demiplane can be a labyrinth, a cage, a tower, or any similar confined structure or area of your choice. The special component for this version of the spell is a miniature representation of the prison made from jade. Minimus Containment: The target shrinks to a height of 1 inch and is imprisoned inside a gemstone or similar object. Light can pass through the gemstone normally (allowing the target to see out and other creatures to see in), but nothing else can pass through, even by means of teleportation or planar travel. The gemstone can't be cut or broken while the spell remains in effect. The special component for this version of the spell is a large, transparent gemstone, such as a corundum, diamond, or ruby. Slumber: The target falls asleep and can't be awoken. The special component for this version of the spell consists of rare soporific herbs. Ending the Spell: During the casting of the spell, in any of its versions, you can specify a condition that will cause the spell to end and release the target. The condition can be as specific or as elaborate as you choose, but the DM must agree that the condition is reasonable and has a likelihood of coming to pass. The conditions can be based on a creature's name, identity, or deity but otherwise must be based on observable actions or qualities and not based on intangibles such as level, class, or hit points. A dispel magic spell can end the spell only if it is cast as a 9th-level spell, targeting either the prison or the special component used to create it. You can use a particular special component to create only one prison at a time. If you cast the spell again using the same component, the target of the first casting is immediately freed from its binding. 	f	1 minute	{V,S,M}	a vellum depiction or a carved statuette in the likeness of the target, and a special component that varies according to the version of the spell you choose, worth at least 500 gp per Hit Die of the target	30 feet	\N	9		Abjuration
304	2016-05-28 16:48:08.104791-04	2016-05-28 16:48:08.104968-04	Power Word Kill	You utter a word of power that can compel one creature you can see within range to die instantly. If the creature you chose has 100 hit points or fewer, it dies. Otherwise, the spell has no effect.	f	1 action	{V}		60 feet	\N	9	Instantaneous	Enchantment
305	2016-05-28 16:48:08.105623-04	2016-05-28 16:48:08.105797-04	True Polymorph	Choose one creature with at least 1 hit point or nonmagical object that you can see within range. You transform the creature into a different creature, the creature into an object, or the object into a creature (the object must be neither worn nor carried by another creature). The transformation lasts for the duration, or until the target drops to 0 hit points or dies. If you concentrate on this spell for the full duration, the transformation becomes permanent.\n Shapechangers aren't affected by this spell. An unwilling creature can make a Wisdom saving throw, and if it succeeds, it isn't affected by this spell. Creature into Creature: If you turn a creature into another kind of creature, the new form can be any kind you choose whose challenge rating is equal to or less than the target's (or its level, if the target doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the new form. It retains its alignment and personality. The target assumes the hit points of its new form, and when it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech unless its new form is capable of such actions. The target's gear melds into the new form. The creature can't activate, use, wield, or otherwise benefit from any of its equipment. Object into Creature: You can turn an object into any kind of creature, as long as the creature's size is no larger than the object's size and the creature's challenge rating is 9 or lower. The creature is friendly to you and your companions. It acts on each of your turns. You decide what action it takes and how it moves. The DM has the creature's statistics and resolves all of its actions and movement. If the spell becomes permanent, you no longer control the creature. It might remain friendly to you, depending on how you have treated it. Creature into Object: If you turn a creature into an object, it transforms along with whatever it is wearing and carrying into that form. The creature's statistics become those of the object, and the creature has no memory of time spent in this form, after the spell ends and it returns to its normal form. 	t	1 action	{V,S,M}	a drop of mercury, a dollop of gum arabic, and a wisp of smoke	30 feet	\N	9	up to 1 hour	Transmutation
306	2016-05-28 16:48:08.106615-04	2016-05-28 16:48:08.1068-04	Time Stop	You briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take 1d4+1 turns in a row, during which you can use actions and move as normal.\n This spell ends if one of the actions you use during this period, or any effects that you create during this period, affects a creature other than you or an object being worn or carried by someone other than you. In addition, the spell ends if you move to a place more than 1,000 feet from the location where you cast it. 	f	1 action	{V}		Self	\N	9	Instantaneous	Transmutation
307	2016-05-28 16:48:08.107527-04	2016-05-28 16:48:08.107706-04	Shapechange	You assume the form of a different creature for the duration. The new form can be any creature with a challenge rating equal to your level or lower. The creature can't be a construct or an undead, and you must have seen the sort of creature at least once. You transform into an average example of that creature, one without any class levels or the Spellcasting trait.\n Your game statistics are replaced by the statistics of the chosen creature, though you retain your alignment and Intelligence, Wisdom, and Charisma scores You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature, If the creature has the same proficiency as you, and the bonus listed in its statistics is higher than yours, use the creature's bonus in place of yours. You can't use any legendary actions or lair actions of the new form. You assume the hit points and Hit Dice of the new form. When you revert to your normal, you return to the number of hit points you had before you transformed. If you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious. You retain the benefit of any features from your class, race, or other source and can use them, provided that your new form is physically capable of doing so. You can't use any special senses you have (for example, darkvision) unless your new form also has that sense. You can only speak if the creature can normally speak. When you transform, you choose whether your equipment falls to the ground, merges into the new form, or is worn by it. Worn equipment functions as normal. The DM determines whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change shape or size to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge into your new form. Equipment that merges has no effect in that state. During this spell's duration, you can use your action to assume a different form following the same restrictions and rules for the original form, with one exception - if your new form has more hit pints than your current one, your hit points remain at their current value. 	t	1 action	{V,S,M}	a jade circlet worth at least 1,500 gp, which you must place on your head before you cast the spell	Self	\N	9	up to 1 hour	Transmutation
308	2016-05-28 16:48:08.108552-04	2016-05-28 16:48:08.108741-04	Warding Wind	A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spell's duration.	t	1 action	{V}		Self	\N	2	up to 10 minutes	Evocation
309	2016-05-28 16:48:08.109445-04	2016-05-28 16:48:08.109619-04	Disguise Self	You make yourself, including your clothing, armor, weapons, and other belongings on your person, look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.\n The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair. To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC. 	f	1 action	{V,S}		Self	\N	1	1 hour	Illusion
310	2016-05-28 16:48:08.110287-04	2016-05-28 16:48:08.110458-04	Major Image	You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can't create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodyte's stench).\n As long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example. Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature. At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled, without requiring your concentration. 	t	1 action	{V,S,M}	a bit of fleece	120 feet	\N	3	up to 10 minutes	Illusion
311	2016-05-28 16:48:08.111145-04	2016-05-28 16:48:08.111317-04	Heroism	A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. 	t	1 action	{V,S}		Touch	\N	1	up to 1 minute	Enchantment
312	2016-05-28 16:48:08.111974-04	2016-05-28 16:48:08.112149-04	Dissonant Whispers	You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn't move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn't have to move away. A deafened creature automatically succeeds on the save.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st. 	f	1 action	{V}		60 feet	\N	1	Instantaneous	Enchantment
313	2016-05-28 16:48:08.112828-04	2016-05-28 16:48:08.113002-04	Witch Bolt	A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell's range or if it has total cover from you.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st. 	t	1 action	{V,S,M}	a twig from a tree that has been struck by lightning	30 feet	\N	1	up to 1 minute	Evocation
322	2016-05-28 16:48:08.122461-04	2016-05-28 16:48:08.122639-04	Enthrall	You weave a distracting string of words, causing creatures of your choice that you can see within range and that can hear you to make a Wisdom saving throw. Any creature that can't be charmed succeeds on this saving throw automatically, and if you or your companions are fighting a creature, it has advantage on the save. On a failed save, the target has disadvantage on Wisdom (Perception) checks made to perceive any creature other than you until the spell ends or until the target can no longer hear you. The spell ends if you are incapacitated or can no longer speak.	f	1 action	{V,S}		60 feet	\N	2	1 minute	Enchantment
315	2016-05-28 16:48:08.114562-04	2016-05-28 16:48:08.114774-04	Illusory Script (ritual)	(a lead-based ink worth at least 10 gp, which the spell consumes)You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that lasts for the duration.\n To you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know. Should the spell be dispelled, the original script and the illusion both disappear. A creature with truesight can read the hidden message. 	f	1 minute	{S,M}		Touch	\N	1	10 days	Illusion
316	2016-05-28 16:48:08.116528-04	2016-05-28 16:48:08.116757-04	Prismatic Spray	Eight multicolored rays of light flash from your hand. Each ray is a different color and has a different power and purpose. Each creature in a 60-foot cone must make a Dexterity saving throw. For each target, roll a d8 to determine which color ray affects it.\n 1-Red: The target takes 10d6 fire damage on a failed save, or half as much damage on a successful one. 2-Orange: The target takes 10d6 acid damage on a failed save, or half as much damage on a successful one. 3-Yellow: The target takes 10d6 lightning damage on a failed save, or half as much damage on a successful one. 4-Green: The target takes 10d6 poison damage on a failed save, or half as much damage on a successful one. 5-Blue: The target takes 10d6 cold damage on a failed save, or half as much damage on a successful one. 6-Indigo: On a failed save, the target is restrained. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures don't need to be consecutive, keep track of both until the target collects three of a kind. 7-Violet: On a failed save, the target is blinded. It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of existence of the DM's choosing and is no longer blinded. (Typically, a creature that is on a plane that isn't its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.) 8-Special: The target is struck by two rays. Roll twice more, rerolling any 8. 	f	1 action	{V,S}		Self (60 foot cone)	\N	7	Instantaneous	Evocation
317	2016-05-28 16:48:08.117593-04	2016-05-28 16:48:08.117788-04	Vicious Mockery	You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (thought it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.\n This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4) and 17th level (4d4). 	f	1 action	{V}		60 feet	\N	0	Instantaneous	Enchantment
318	2016-05-28 16:48:08.118577-04	2016-05-28 16:48:08.118756-04	Minor Illusion	You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.\n If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends. If you create an image of an object - such as a chair, muddy footprints, or a small chest - it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it. If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature. 	f	1 action	{S,M}		30 feet	\N	0	1 minute	Illusion
319	2016-05-28 16:48:08.119586-04	2016-05-28 16:48:08.119777-04	Heat Metal	Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again.\n If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn't drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot above 2nd. 	t	1 action	{V,S,M}	a piece of iron and a flame	60 feet	\N	2	up to 1 minute	Transmutation
320	2016-05-28 16:48:08.120531-04	2016-05-28 16:48:08.120732-04	Locate Animals or Plants (ritual)	Describe or name a specific kind of beast or plant. Concentrating on the voice of nature in your surroundings, you learn the direction and distance to the closest creature or plant of that kind within 5 miles, if any are present.	f	1 action	{V,S,M}	a bit of fur from a bloodhound	Self	\N	2	Instantaneous	Divination
321	2016-05-28 16:48:08.1215-04	2016-05-28 16:48:08.121708-04	Detect Thoughts	For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn't speak any language, the creature is unaffected.\n You initially learn the surface thoughts of the creature - what is most on its mind in that moment. As an action, you can either shift your attention to another creature's thoughts or attempt to probe deeper into the same creature's mind. If you probe deeper, the target must make a Wisdom saving throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind, and unless you shift your attention to another creature's thoughts, the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check if it succeeds, the spell ends. Questions verbally directed at the target creature naturally shape the course of its thoughts, so this spell is particularly effective as part of an interrogation. You can also use this spell to detect the presence of thinking creatures you can't see. When you cast the spell or as your action during the duration, you can search for thoughts within 30 feet of you. The spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet of lead blocks you. You can't detect a creature with an Intelligence of 3 or lower or one that doesn't speak any language. Once you detect the presence of a creature in this way, you can read its thoughts for the rest of the duration as described above, even if you can't see it, but it must still be within range. 	t	1 action	{V,S,M}	a copper piece	Self	\N	2	up to 1 minute	Divination
323	2016-05-28 16:48:08.123656-04	2016-05-28 16:48:08.123862-04	Thorn Whip	You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you.\n This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6). 	f	1 action	{V,S,M}		30 feet	\N	0	Instantaneous	Transmutation
324	2016-05-28 16:48:08.124646-04	2016-05-28 16:48:08.124839-04	Glyph of Warding	When you cast this spell, you inscribe a glyph that harms other creatures, either upon a surface (such as a table or a section of floor or wall) or within an object that can be closed (such as a book, a scroll, or a treasure chest) to conceal the glyph. If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place, if the object is moved more than 10 feet from where you cast this spell, the glyph is broken and the spell ends without being triggered.\n The glyph is nearly invisible and requires a successful Intelligence (Investigation) check against your spell save DC to be found. You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or standing on the glyph, removing another object covering the glyph, approaching within a certain distance of the glyph, or manipulating the object on which the glyph is inscribed. For glyphs inscribed within an object, the most common triggers include opening that object, approaching within a certain distance of the object, or seeing or reading the glyph. Once a glyph is triggered, this spell ends. You can further refine the trigger so the spell activates only under certain circumstances or according to physical characteristics (such as height or weight), creature kind (for example, the ward could be set to affect aberrations or drow), or alignment. You can also set conditions for creatures that don't trigger the glyph, such as those who say a certain password. When you inscribe the glyph, choose explosive runes or a spell glyph. Explosive Runes: When triggered, the glyph erupts with magical energy in a 20-foot-radius sphere centered on the glyph. The sphere spreads around corners. Each creature in the aura must make a Dexterity saving throw. A creature takes 5d8 acid, cold, fire, lightning, or thunder damage on a failed saving throw (your choice when you create the glyph), or half as much damage on a successful one. Spell Glyph: You can store a prepared spell of or lower in the glyph by casting it as part of creating the glyph. The spell must target a single creature or an area. The spell being stored has no immediate effect when cast in this way. When the glyph is triggered, the stored spell is cast. If the spell has a target, it targets the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell summons hostile creatures or creates harmful objects or traps, they appear as close as possible to the intruder and attack it. If the spell requires concentration, it lasts until the end of its full duration. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage of an explosive runes glyph increases by 1d8 for each slot level above 3rd. If you create a spell glyph, you can store any spell of up to the same level as the slot you use for the glyph of warding. 	f	1 hour	{V,S,M}	incense and powdered diamond worth at least 200 gp, which the spell consumes	Touch	\N	3		Abjuration
325	2016-05-28 16:48:08.125747-04	2016-05-28 16:48:08.125943-04	Suggestion	(a snake's tongue and either a bit of honeycomb or a drop of sweet oil)You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell.\n The target must make a Wisdom saving throw. On a failed save, it purses the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do. You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a knight five her warhorse to the first beggar she meets. If the condition isn't met before the spell expires, the activity isn't preformed. If you or any of your companions damage the target, the spell ends. 	t	1 action	{V,M}		30 feet	\N	2	up to 8 hours	Enchantment
326	2016-05-28 16:48:08.126842-04	2016-05-28 16:48:08.127037-04	Clairvoyance	You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it can't be attacked or otherwise interacted with. When you cast the spell, you choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As your action, you can switch between seeing and hearing. A creature that can see the sensor (such as a creature benefitting from see invisibility or truesight) sees a luminous, intangible orb about the size of your fist.\n When you cast the spell, you choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As your action, you can switch between seeing and hearing. A creature that can see the sensor (such as a creature benefitting from see invisibility or truesight) sees a luminous, intangible orb about the size of your fist. A creature that can see the sensor (such as a creature benefitting from see invisibility or truesight) sees a luminous, intangible orb about the size of your fist. 	t	10 minutes	{V,S,M}	a focus worth at least 100 gp, either a jeweled horn for hearing or a glass eye for scrying	1 mile	\N	3	up to 10 minutes	Divination
327	2016-05-28 16:48:08.127769-04	2016-05-28 16:48:08.127945-04	Bestow Curse	You touch a creature, and that creature must succeed on a Wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options.\n • Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score. • While cursed, the target has disadvantage on attack rolls against you. • While cursed, the target must make a Wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing. • While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target. A remove curse spell ends this effect. At the DM's option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The DM has final say on such a curse's effect. At Higher Levels: If you cast this spell using a spell slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesn't require concentration. 	t	1 action	{V,S}		Touch	\N	3	up to 1 minute	Necromancy
328	2016-05-28 16:48:08.128651-04	2016-05-28 16:48:08.128826-04	Compulsion	Creatures of your choice that you can see within range and that can hear you must make a Wisdom saving throw. A target automatically succeeds on this saving throw if it can't be charmed. On a failed save, a target is affected by this spell. Until the spell ends, you can use a bonus action on each of your turns to designate a direction that is horizontal to you. Each affected target must use as much of its movement as possible to move in that direction on its next turn. It can take its action before it moves. After moving in this way, it can make another Wisdom saving throw to try to end the effect.\n A target isn't compelled to move into an obviously deadly hazard, such as a fire pit, but it will provoke opportunity attacks to move in the designated direction. 	t	1 action	{V,S}		30 feet	\N	4	up to 1 minute	Enchantment
335	2016-05-28 16:48:08.135207-04	2016-05-28 16:48:08.135378-04	Entangle	Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration, these plants turn the ground in the area into difficult terrain.\n A creature in the area when you cast the spell must succeed on a Strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself. When the spell ends, the conjured plants wilt away. 	t	1 action	{V,S}		90 feet	\N	1	up to 1 minute	Conjuration
329	2016-05-28 16:48:08.129531-04	2016-05-28 16:48:08.129717-04	Animate Objects	Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can't animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points.\n As a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. Animated Object Statistics Tiny - HP: 20, AC: 18, Attack: +8 to hit, 1d4 + 4 damage, Str: 4, Dex: 18 Small - HP: 25, AC: 16, Attack: +6 to hit, 1d8 + 2 damage, Str: 6, Dex: 14 Medium - HP: 40, AC: 13, Attack: +5 to hit, 2d6 + 1 damage, Str: 10, Dex: 12 Large - HP: 50, AC: 10, Attack: +6 to hit, 2d10 + 2 damage, Str: 14, Dex: 10 Huge - HP: 80, AC: 10, Attack: +8 to hit, 2d12 + 4 damage, Str: 18, Dex: 6 An animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determine by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet, if the objects lack legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form. If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and bludgeoning damage determine by its size. The DM might rule that a specific object inflicts slashing or piercing damage based on its form. At Higher Levels: If you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th. 	t	1 action	{V,S}		120 feet	\N	5	up to 1 minute	Transmutation
330	2016-05-28 16:48:08.130576-04	2016-05-28 16:48:08.130786-04	Speak with Plants	You imbue plants within 30 feet of you with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands. You can question plants about events in the spell's area within the past day, gaining information about creatures that have passed, weather, and other circumstances.\n You can also turn difficult terrain caused by plant growth (such as thickets and undergrowth) into ordinary terrain that lasts for the duration. Or you can turn ordinary terrain where plants are present into difficult terrain that lasts for the duration, causing vines and branches to hinder pursuers, for example. Plants might be able to perform other tasks on your behalf, at the DM's discretion. The spell doesn't enable plants to uproot themselves and move about, but they can freely move branches, tendrils, and stalks. If a plant creature is in the area, you can communicate with it as if you shared a common language, but you gain no magical ability to influence it. This spell can cause the plants created by the entangle spell to release a restrained creature. 	f	1 action	{V,S}		Self (30-foot radius)	\N	3	10 minutes	Transmutation
331	2016-05-28 16:48:08.131604-04	2016-05-28 16:48:08.131797-04	Polymorph	This spell transforms a creature with at least 1 hit point that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. A shapechanger automatically succeeds on this saving throw.\n The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast whose challenge rating is equal to or less than the target's (or the target's level, if it doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality. The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech. The target's gear melds into the new form. The creature can't activate, use, wield, or otherwise benefit from any of its equipment. 	t	1 action	{V,S,M}	a caterpillar cocoon	60 feet	\N	4	up to 1 hour	Transmutation
332	2016-05-28 16:48:08.132562-04	2016-05-28 16:48:08.132751-04	Hallucinatory Terrain	You make natural terrain in a 150-foot cube in range look, sound, and smell like some other sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Manufactured structures, equipment, and creatures within the area aren't changed in appearance.\n The tactile characteristics of the terrain are unchanged, so creatures entering the area are likely to see through the illusion. If the difference isn't obvious by touch, a creature carefully examining the illusion can attempt an Intelligence (Investigation) check against your spell save DC to disbelieve it. A creature who discerns the illusion for what it is, sees it as a vague image superimposed on the terrain. 	f	10 minutes	{V,S,M}	a stone, a twig, and a bit of green plant	300 feet	\N	4	24 hours	Illusion
333	2016-05-28 16:48:08.133469-04	2016-05-28 16:48:08.133649-04	Magic Stone	You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker's, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Hit or miss, the spell then ends on the stone.\n If you cast this spell again, the spell ends early on any pebbles still affected by it.	f	1 bonus action	{V,S}		Touch	\N	0	1 minute	Transmutation
334	2016-05-28 16:48:08.134349-04	2016-05-28 16:48:08.134532-04	Programmed Illusion	You create an illusion of an object, a creature, or some other visible phenomenon within range that activates when a specific condition occurs. The illusion is imperceptible until then. It must be no larger than a 30-foot cube, and you decide when you cast the spell how the illusion behaves and what sounds it makes. This scripted performance can last up to 5 minutes.\n When the condition you specify occurs, the illusion springs into existence and performs in the manner you described. Once the illusion finishes performing, it disappears and remains dormant for 10 minutes. After this time, the illusion can be activated again. The triggering condition can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the area. For example, you could create an illusion of yourself to appear and warn off others who attempt to open a trapped door, or you could set the illusion to trigger only when a creature says the correct word or phrase. Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature. 	f	1 action	{V,S,M}		120 feet	\N	6		Illusion
336	2016-05-28 16:48:08.136064-04	2016-05-28 16:48:08.136245-04	Awaken	After spending the casting time tracing magical pathways within a precious gemstone, you touch a huge or smaller beast or plant. The target must have either no Intelligence score or an Intelligence of 3 or less. The target gains an Intelligence of 10. The target also gains the ability to speak one language you know. If the target is a plant, it gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human's. Your DM chooses statistics appropriate for the awakened plant, such as the statistics for the awakened shrub or the awakened tree.\n The awakened beast or plant is charmed by you for 30 days or until you and your companions do anything harmful to it. When the charmed condition ends, the awakened creature chooses whether to remain friendly to you, based on how you treated it while it was charmed. 	f	8 hours	{V,S,M}	an agate worth at least 1,000 gp, which the spell consumes	Touch	\N	5	Instantaneous	Transmutation
337	2016-05-28 16:48:08.137006-04	2016-05-28 16:48:08.137186-04	Legend Lore	Name or describe a person, place, or object. The spell brings to your mind a brief summary of the significant lore about the thing you named. The lore might consist of current tales, forgotten stories, or even secret lore that has never been widely known. If the thing you named isn't of legendary importance, you gain no information.\n The more information you already have about the thing, the more precise and detailed the information you receive is. The information you learn is accurate but might be couched in figurative language. For example, if you have a mysterious magic axe on hand, the spell might yield this information - Woe to the evildoer whose hand touches the axe, for even the haft slices the hand of the evil ones. Only a true Child of Stone, lover and beloved of Moradin, may awaken the true powers of the axe, and only with the sacred word Rudnogg on the lips. 	f	10 minutes	{V,S,M}	incense worth at least 250 gp, which the spell consumes, and four ivory strips worth at least 50 gp each	Self	\N	5	Instantaneous	Divination
338	2016-05-28 16:48:08.137968-04	2016-05-28 16:48:08.138162-04	Power Word Heal	A wave of healing energy washes over the creature you touch. The target regains all its hit points. If the creature is charmed, frightened, paralyzed, or stunned, the condition ends. If the creature is prone, it can use its reaction to stand up. This spell has no effect on undead or constructs.	f	1 action	{V,S}		Touch	\N	9	Instantaneous	Evocation
339	2016-05-28 16:48:08.138851-04	2016-05-28 16:48:08.139025-04	Druidcraft	Whispering to the spirits of nature, you create one of the following effects within range.\n • You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round. • You instantly make a flower blossom, a seed pod open, or a leaf bud bloom. • You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint odor of skunk. The effect must fit in a 5-foot cube. • You instantly light or snuff out a candle, a torch, or a small campfire. 	f	1 action	{V,S}		30 feet	\N	0	Instantaneous	Transmutation
340	2016-05-28 16:48:08.139722-04	2016-05-28 16:48:08.139905-04	Produce Flame	A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again.\n You can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage. This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8). 	f	1 action	{V,S}		Self	\N	0	10 minutes	Conjuration
341	2016-05-28 16:48:08.140628-04	2016-05-28 16:48:08.14082-04	Shillelagh	The wood of a club or quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon.	f	1 bonus action	{V,S,M}		Touch	\N	0	1 minute	Transmutation
342	2016-05-28 16:48:08.141565-04	2016-05-28 16:48:08.141757-04	Etherealness	You step into the border regions of the Ethereal Plane, in the area where it overlaps with your current plane. You remain in the Border Ethereal for the duration or until you use your action to dismiss the spell. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can see and hear the plan you originated from, but everything there looks gray, and you can't see anything more than 60 feet away.\n While on the Ethereal Plane, you can only affect and be affected by other creatures on that plane. Creatures that aren't on the Ethereal Plane can't perceive you and can't interact with you, unless a special ability or magic has given them the ability to do so. You ignore all objects and effects that aren't on the Ethereal Plane, allowing you to move through objects you perceive on the plan you originated from. When the spell ends, you immediately return to the plane you originated from in the spot you currently occupy. If you occupy the same spot as a solid object or creature when this happens, you are immediately shunted to the nearest unoccupied space that you can occupy and take force damage equal to twice the number of feet you are moved. This spell has no effect if you cast it while you are on the Ethereal Plane or a plane that doesn't border it, such as one of the Outer Planes. At Higher Levels: When you cast this spell using a spell slot of 8th level or higher, you can target up to three willing creatures (including you) for each slot level above 7th. The creatures must be within 10 feet of you when you cast the spell. 	f	1 action	{V,S}		Self	\N	7	8 hours	Transmutation
343	2016-05-28 16:48:08.142472-04	2016-05-28 16:48:08.142653-04	Forcecage	An immobile, invisible, cube-shaped prison composed of magical force springs into existence around an area you choose within range. The prison can be a cage or a solid box as you choose.\n A prison in the shape of a cage can be up to 20 feet on a side and is made from 1/2-inch diameter bars spaced 1/2 inch apart. A prison in the shape of a box can be up to 10 feet on a side, creating a solid barrier that prevents any matter from passing through it and blocking any spells cast into or out of the area. When you cast the spell, any creature that is completely inside the cage's area is trapped. Creatures only partially within the area, or those too large to fit inside the area, are pushed away from the center of the area until they are completely outside the area. A creature inside the cage can't leave it by nonmagical means. If the creature tries to use teleportation or interplanar travel to leave the cage, it must first make a Charisma saving throw. On a success, the creature can use that magic to exit the cage. On a failure, the creature can't exit the cage and wastes the use of the spell or effect. The cage also extends into the Ethereal Plane, blocking ethereal travel. This spell can't be dispelled by dispel magic. 	f	1 action	{V,S,M}	ruby dust worth 1,500 gp	100 feet	\N	7	1 hour	Evocation
346	2016-05-28 16:48:08.14506-04	2016-05-28 16:48:08.145238-04	Moonbeam	A silvery beam of pale light shines down in a 5-foot radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder.\n When a creature enters the spell's area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a Constitution saving throw. It takes 2d10 radiant damage on a failed save, or half as much damage on a successful one. A shapechanger makes its saving throw with disadvantage. If it fails, it also instantly reverts to its original form and can't assume a different form until it leaves the spell's light. On each of your turns after you cast this spell, you can use an action to move the beam 60 feet in any direction. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd. 	t	1 action	{V,S,M}	several seeds of any moonseed plant and a piece of opalescent feldspar	120 feet	\N	2	up to 1 minute	Evocation
347	2016-05-28 16:48:08.145985-04	2016-05-28 16:48:08.146164-04	Animal Messenger (ritual)	By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue ray, or a bird. You specify a location, which you must have visited, and a recipient who matches a general description, such as a man or woman dressed in the uniform of the town guard or a red-haired dwarf wearing a pointed hat. You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell towards the specified location, covering about 50 miles per 24 hours for a flying messenger or 25 miles for other animals.\n When the messenger arrives, it delivers your message to the creature that you described, replicating the sound of your voice. The messenger speaks only to a creature matching the description you gave. If the messenger doesn't reach its destination before the spell ends, the message is lost, and the beast makes its way back to where you cast this spell. At Higher Levels: If you cast this spell using a spell slot of 3rd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd. 	f	1 action	{V,S,M}	a morsel of food	30 feet	\N	2	24 hours	Enchantment
348	2016-05-28 16:48:08.146873-04	2016-05-28 16:48:08.147048-04	Beast Sense (ritual)	You touch a willing beast. For the duration of the spell, you can use your action to see through the beast's eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses.	t	1 action	{S}		Touch	\N	2	up to 1 hour	Divination
349	2016-05-28 16:48:08.147702-04	2016-05-28 16:48:08.147873-04	Meld into Stone (ritual)	You step into a stone object or surface large enough to fully contain your body, melding yourself and all the equipment you carry with the stone for the duration. Using your movement, you step into the stone at a point you can touch. Nothing of your presence remains visible or otherwise detectable by nonmagical senses.\n While merged with the stone, you can't see what occurs outside it, and any Wisdom (Perception) checks you make to hear sounds outside it are made with disadvantage. You remain aware of the passage of time and can cast spells on yourself while merged in the stone. You can use your movement to leave the stone where you entered it, which ends the spell. You otherwise can't move. Minor physical damage to the stone doesn't harm you, but its partial destruction or a change in its shape (to the extent that you no longer fit within it) expels you and deals 6d6 bludgeoning damage to you. The stone's complete destruction (or transmutation into a different substance) expels you and deals 50 bludgeoning damage to you. If expelled, you fall prone in an unoccupied space closest to where you first entered. 	f	1 action	{V,S}		Touch	\N	3	8 hours	Transmutation
350	2016-05-28 16:48:08.148615-04	2016-05-28 16:48:08.148842-04	Control Water	Until the spell ends, you control any freestanding water inside an area you choose that is a cube up to 100 feet on a side. You can choose from any of the following effects when you cast this spell. As an action on your turn, you can repeat the same effect or choose a different one.\n Flood: You cause the water level of all standing water in the area to rise by as much as 20 feet. If the area includes a shore, the flooding water spills over onto dry land. If you choose an area in a large body of water, you instead create a 20-foot tall wave that travels from one side of the area to the other and then crashes down. Any Huge or smaller vehicles in the wave's path are carried with it to the other side. Any Huge or smaller vehicles struck by the wave have a 25 percent chance of capsizing. The water level remains elevated until the spell ends or you choose a different effect. If this effect produced a wave, the wave repeats on the start of your next turn while the flood effect lasts. Part Water: You cause water in the area to move apart and create a trench. The trench extends across the spell's area, and the separated water forms a wall to either side. The trench remains until the spell ends or you choose a different effect. The water then slowly fills in the trench over the course of the next round until the normal water level is restored. Redirect Flow: You cause flowing water in the area to move in a direction you choose, even if the water has to flow over obstacles, up walls, or in other unlikely directions. The water in the area moves as you direct it, but once it moves beyond the spell's area, it resumes its flow based on the terrain conditions. The water continues to move in the direction you chose until the spell ends or you choose a different effect. Whirlpool: This effect requires a body of water at least 50 feet square and 25 feet deep. You cause a whirlpool to form in the center of the area. The whirlpool forms a vortex that is 5 feet wide at the base, up to 50 feet wide at the top, and 25 feet tall. Any creature or object in the water and within 25 feet of the vortex is pulled 10 feet toward it. A creature can swim away from the vortex by making a Strength (Athletics) check against your spell save DC. When a creature enters the vortex for the first time on a turn or starts its turn there, it must make a Strength saving throw. On a failed save, the creature takes 2d8 bludgeoning damage and is caught in the vortex until the spell ends. On a successful save, the creature takes half damage, and isn't caught in the vortex. A creature caught in the vortex can use its action to try to swim away from the vortex as described above, but has disadvantage on the Strength (Athletics) check to do so. The first time each turn that an object enters the vortex, the object takes 2d8 bludgeoning damage, this damage occurs each round it remains in the vortex. 	t	1 action	{V,S,M}	a drop of water and a pinch of dust	300 feet	\N	4	up to 10 minutes	Transmutation
351	2016-05-28 16:48:08.149844-04	2016-05-28 16:48:08.150053-04	Conjure Animals	You summon fey spirits that take the form of beasts and appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears.\n • One beast of challenge rating 2 or lower • Two beasts of challenge rating 1 or lower • Four beasts of challenge rating 1/2 or lower • Eight beasts of challenge rating 1/4 or lower Each beast is also considered fey, and it disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The DM has the creatures' statistics. At Higher Levels: When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear - twice as many with a 5th-level slot, three times as many with a 7th-level slot, and four times as many with a 9th-level slot. 	t	1 action	{V,S}		60 feet	\N	3	up to 1 hour	Conjuration
394	2016-05-28 16:48:08.191932-04	2016-05-28 16:48:08.192115-04	Aura of Purity	Purifying energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each non-hostile creature in the aura (including you) can't become diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions - blinded, charmed, deafened, frightened, paralyzed, poisoned, and stunned.	t	1 action	{V}		Self (30-foot radius)	\N	4	up to 10 minutes	Abjuration
352	2016-05-28 16:48:08.150996-04	2016-05-28 16:48:08.151286-04	Wind Wall	A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration.\n When the wall appears, each creature within its area must make a Strength saving throw. A creature takes 3d8 bludgeoning damage on a failed save, or half as much damage on a successful one. The strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can't pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and automatically miss. (Boulders hurled by giants or siege engines, and similar projectiles, are unaffected.) Creatures in gaseous form can't pass through it. 	t	1 action	{V,S,M}	a tiny fan and a feather of exotic origin	120 feet	\N	3	up to 1 minute	Evocation
353	2016-05-28 16:48:08.15214-04	2016-05-28 16:48:08.15233-04	Conjure Woodland Beings	You summon fey creatures that appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears.\n • One fey creature of challenge rating 2 or lower • Two fey creatures of challenge rating 1 or lower • Four fey creatures of challenge rating 1/2 or lower • Eight fey creatures of challenge rating 1/4 or lower A summoned creature disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which have their own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The DM has the creatures' statistics. At Higher Levels: When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear - twice as many with a 6th-level slot and three times as many with an 8th-level slot. 	t	1 action	{V,S,M}	one holly berry per creature summoned	60 feet	\N	4	up to 1 hour	Conjuration
354	2016-05-28 16:48:08.153037-04	2016-05-28 16:48:08.153212-04	Giant Insect	You transform up to ten centipedes, three spiders, five wasps, or one scorpion within range into giant versions of their natural forms for the duration. A centipede becomes a giant centipede, a spider becomes a giant spider, a wasp becomes a giant wasp, and a scorpion becomes a giant scorpion.\n Each creature obeys your verbal commands, and in combat, they act on your turn each round. The DM has the statistics for these creatures and resolves their actions and movement. A creature remains in its giant size for the duration, until it drops to 0 hit points, or until you use an action to dismiss the effect on it. The DM might allow you to choose different targets. For example, if you transform a bee, its giant version might have the same statistics as a giant wasp. 	t	1 action	{V,S}		30 feet	\N	4	up to 10 minutes	Transmutation
355	2016-05-28 16:48:08.153874-04	2016-05-28 16:48:08.154047-04	Ensnaring Strike	The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away.\n While restrained by this spell, the target takes 1d6 piercing damage at the start of each of its turns. A creature restrained by the vines or one that can touch the creature can use its action to make a Strength check against your spell save DC. On a success, the target is freed. At Higher Levels: If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st. 	t	1 bonus action	{V}		Self	\N	1	up to 1 minute	Conjuration
356	2016-05-28 16:48:08.154757-04	2016-05-28 16:48:08.15494-04	Hunter's Mark	You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature.\n At Higher Levels: When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours. 	t	1 bonus action	{V}		90 feet	\N	1	up to 1 hour	Divination
357	2016-05-28 16:48:08.155618-04	2016-05-28 16:48:08.155792-04	Compelled Duel	You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you, if it succeeds on this saving throw, this spell doesn't restrict the target's movement for that turn.\n The spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target. 	t	1 bonus action	{V}		30 feet	\N	1	up to 1 minute	Enchantment
358	2016-05-28 16:48:08.156507-04	2016-05-28 16:48:08.156685-04	Commune with Nature (ritual)	You briefly become one with nature and gain knowledge of the surrounding territory. In the outdoors, the spell gives you knowledge of the land within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet. The spell doesn't function where nature has been replaced by construction, such as in dungeons and towns.\n You instantly gain knowledge of up to three facts of your choice about any of the following subjects as they relate to the area - terrain and bodies of water	f	1 minute	{V,S}		Self	\N	5	Instantaneous	Divination
395	2016-05-28 16:48:08.192823-04	2016-05-28 16:48:08.193002-04	Conjure Barrage	You throw a nonmagical weapon or fire a piece of nonmagical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60-foot cone must succeed on a Dexterity saving throw. A creature takes 3d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component.	f	1 action	{V,S,M}	one piece of ammunition or a thrown weapon	Self (60-foot cone)	\N	3	Instantaneous	Conjuration
359	2016-05-28 16:48:08.157404-04	2016-05-28 16:48:08.157586-04	Planar Binding	With this spell, you attempt to bind a celestial, an elemental, a fey, or a fiend to your service. The creature must be within range for the entire casting of the spell. (Typically, the creature is first summoned into the center of an inverted magic circle in order to keep it trapped while this spell is cast.) At the completion of the casting, the target must make a Charisma saving throw. On a failed save, it is bound to serve you for the duration. If the creature was summoned or created by another spell, that spell's duration is extended to match the duration of this spell.\n A bound creature must follow your instructions to the best of its ability. You might command the creature to accompany you on an adventure, to guard a location, or to deliver a message. The creature obeys the letter of your instructions, but if the creature is hostile to you, it strives to twist your words to achieve its own objectives. If the creature carries out your instructions completely before the spell ends, it travels to you to report this fact if you are on the same plane of existence. If you are on a different plane of existence, it returns to the place where you bound it and remains there until the spell ends. At Higher Levels: When you cast this spell using a spell slot of a higher level, the duration increases to 10 days with a 6th-level slot, to 30 days with a 7th-level slot, to 180 days with an 8th-level slot, and to a year and a day with a 9th-level spell slot. 	f	1 hour	{V,S,M}	a jewel worth at least 1,000 gp, which the spell consumes	60 feet	\N	5	24 hours	Abjuration
360	2016-05-28 16:48:08.158455-04	2016-05-28 16:48:08.158661-04	Reincarnate	You touch a dead humanoid or a piece of a dead humanoid. Provided that the creature has been dead no longer than 10 days, the spell forms a new adult body for it and then calls the soul to enter that body. If the target's soul isn't free or willing to do so, the spell fails.\n The magic fashions a new body for the creature to inhabit, which likely causes the creature's race to change. The DM rolls a d100 and consults the following table to determine what form the creature takes when restored to life, or the DM chooses a form. d100 - Race: 01-04 Dragonborn 05-13 Dwarf, hill 14-21 Dwarf, mountain 22-25 Elf, dark 26-34 Elf, high 35-42 Elf, wood 43-46 Gnome, forest 47-52 Gnome, rock 53-56 Half-elf 57-60 Half-orc 61-68 Halfling, lightfoot 69-76 Halfling, stout 77-96 Human 97-00 Tiefling The reincarnated creature recalls its former life and experiences. It retains the capabilities it had in its original form, except it exchanges its original race for the new one and changes its racial traits accordingly. 	f	1 hour	{V,S,M}	rare oils and unguents worth at least 1,000 gp, which the spell consumes	Touch	\N	5	Instantaneous	Transmutation
361	2016-05-28 16:48:08.159442-04	2016-05-28 16:48:08.159624-04	Maelstrom	A mass of 5-foot-deep water appears and swirls in a 30-foot radius centered on a point you can see within range. The point must be on ground or in a body of water. Until the spell ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 6d6 bludgeoning damage and be pulled 10 feet toward the center.	t	1 action	{V,S,M}	paper or leaf in the shape of a funnel	120 feet	\N	5	up to 1 minute	Evocation
362	2016-05-28 16:48:08.160295-04	2016-05-28 16:48:08.160469-04	Transport via Plants	This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement.	f	1 action	{V,S}		10 feet	\N	6	1 round	Conjuration
363	2016-05-28 16:48:08.161244-04	2016-05-28 16:48:08.161443-04	Wall of Thorns	You create a wall of tough, pliable, tangled brush bristling with needle-sharp thorns. The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight.\n When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 7d8 piercing damage, or half as much damage on a successful save. A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature moves through the wall, it must spend 4 feet of movement. Furthermore, the first time a creature enters the wall on a turn or ends its turn there, the creature must make a Dexterity saving throw. It takes 7d8 slashing damage on a failed save, or half as much on a successful save. At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, both types of damage increase by 1d8 for each slot level above 6th. 	t	1 action	{V,S,M}	a handful of thorns	120 feet	\N	6	up to 10 minutes	Conjuration
364	2016-05-28 16:48:08.162153-04	2016-05-28 16:48:08.162328-04	Wind Walk	You and up to ten willing creatures you can see within range assume a gaseous form for the duration, appearing as wisps of cloud. While in this cloud form, a creature has a flying speed of 300 feet and has resistance to damage from nonmagical weapons. The only actions a creature can take in this form are the Dash action or to revert to its normal form. Reverting takes 1 minute, during which time a creature is incapacitated and can't move. Until the spell ends, a creature can revert to cloud form, which also requires the 1-minute transformation.\n If a creature is in cloud form and flying when the effect ends, the creature descends 60 feet per round for 1 minute until it lands, which it does safely. If it can't land after 1 minute, the creature falls the remaining distance. 	f	1 action	{V,S,M}	fire and holy water	30 feet	\N	6	8 hours	Transmutation
365	2016-05-28 16:48:08.163024-04	2016-05-28 16:48:08.163197-04	Conjure Fey	You summon a fey creature of challenge rating 6 or lower, or a fey spirit that takes the form of a beast of challenge rating 6 or lower. It appears in an unoccupied space that you can see within range. The fey creature disappears when it drops to 0 hit points or when the spell ends.\n The fey creature is friendly to you and your companions for the duration. Roll initiative for the creature, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don't violate its alignment. If you don't issue any commands to the fey creature, it defends itself from hostile creatures but otherwise takes no actions. If your concentration is broken, the fey creature doesn't disappear. Instead, you lose control of the fey creature, it becomes hostile toward you and your companions, and it might attack. An uncontrolled fey creature can't be dismissed by you, and it disappears 1 hour after you summoned it. The DM has the fey creature's statistics. At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, the challenge rating increases by 1 for each slot level above 6th. 	t	1 minute	{V,S}		90 feet	\N	6	up to 1 hour	Conjuration
366	2016-05-28 16:48:08.163884-04	2016-05-28 16:48:08.164059-04	Animal Shapes	Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a large or smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use your actions to transform affected creatures into new forms.\n The transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies. You can choose a different form for each target. A target's game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit point it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak or cast spells. The target's gear melds into the new form. The target can't activate, wield, or otherwise benefit from any of its equipment. 	t	1 action	{V,S}		30 feet	\N	8	up to 24 hours	Transmutation
367	2016-05-28 16:48:08.16478-04	2016-05-28 16:48:08.164967-04	Antipathy/Sympathy	This spell attracts or repels creatures of your choice. You target something within range, either a Huge or smaller object or creature or an area that is no larger than a 200-foot cube. Then specify a kind of intelligent creature, such as red dragons, goblins, or vampires. You invest the target with an aura that either attracts or repels the specified creatures for the duration. Choose antipathy or sympathy as the aura's effect.\n Antipathy: The enchantment causes creatures of the kind you designated to feel an intense urge to leave the area and avoid the target. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a Wisdom saving throw or become frightened. The creature remains frightened while it can see the target or is within 60 feet of it. While frightened by the target, the creature must use its movement to move to the nearest safe spot from which it can't see the target. If the creature moves more than 60 feet from the target and can't see it, the creature is no longer frightened, but the creature becomes frightened again if it regains sight of the target or moves within 60 feet of it. Sympathy: The enchantment causes the specified creatures to feel an intense urge to approach the target while within 60 feet of it or able to see it. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a Wisdom saving throw or use its movement on each of its turns to enter the area or move within reach of the target. When the creature has done so, it can't willingly move away from the target. If the target damages or otherwise harms an affected creature, the affected creature can make a Wisdom saving throw to end the effect, as described below. Ending the Effect: If an affected creature ends its turn while not within 60 feet of the target or able to see it, the creature makes a Wisdom saving throw. ON a successful save, the creature is no longer affected by the target and recognizes the feeling of repugnance or attraction as magical. In addition, a creature affected by the spells is allowed another Wisdom saving throw every 24 hours while the spell persists. A creature that successfully saves against this effect is immune to it for 1 minute, after which time it can be affected again. 	f	1 hour	{V,S,M}	either a lump of alum soaked in vinegar for the antipathy effect or a drop of honey for the sympathy effect	60 feet	\N	8	10 days	Enchantment
368	2016-05-28 16:48:08.165797-04	2016-05-28 16:48:08.16599-04	Tsunami	A wall of water springs into existence at a point you choose within range. You can make the wall up to 300 feet long, 300 feet high, and 50 feet thick. The wall lasts for the duration.\n When the wall appears, each creature within its area must make a Strength saving throw. On a failed save, a creature takes 6d10 bludgeoning damage, or half as much damage on a successful save. At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 50 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 5d10 bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall's height is reduced by 50 feet, and the damage creatures take from the spell on subsequent rounds is reduced by 1d10. When the wall reaches 0 feet in height, the spell ends. A creature caught in the wall can move by swimming. Because of the force of the wave, though, the creature must make a successful Strength (Athletics) check against your spell save DC in order to move at all. If it fails the check, it can't move. A creature that moves out of the area falls to the ground. 	t	1 minute	{V,S}		Sight	\N	8	up to 6 rounds	Conjuration
369	2016-05-28 16:48:08.166914-04	2016-05-28 16:48:08.167128-04	Searing Smite	The next time you hit a creature with a melee weapon attack during the spell's duration, your weapon flares with white-hot intensity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames. At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes 1d6 fire damage. On a successful save, the spell ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the initial extra damage dealt by the attack increases by 1d6 for each slot above the 1st. 	t	1 bonus action	{V}		Self	\N	1	up to 1 minute	Evocation
370	2016-05-28 16:48:08.167959-04	2016-05-28 16:48:08.168294-04	Thunderous Smite	The first time you hit with a melee weapon attack during this spell's duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone.	t	1 bonus action	{V}		Self	\N	1	up to 1 minute	Evocation
371	2016-05-28 16:48:08.169135-04	2016-05-28 16:48:08.169331-04	Wrathful Smite	The next time you hit with a melee weapon attack during this spell's duration, your attack deals an extra 1d6 psychic damage. Additionally, if the target is a creature, it must make a Wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell.	t	1 bonus action	{V,S,M}		Self	\N	1	up to 1 minute	Evocation
372	2016-05-28 16:48:08.171198-04	2016-05-28 16:48:08.171397-04	Branding Smite	The next time you hit a creature with a weapon attack before this spell ends, the weapon gleams with astral radiance as you strike. The attack deals an extra 2d6 radiant damage to the target, which becomes visible if it is invisible, and the target sheds dim light in a 5-foot radius and can't become invisible until the spell ends.\n At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the extra damage increases by 1d6 for each slot level above 2nd. 	t	1 bonus action	{V}		Self	\N	2	up to 1 minute	Evocation
402	2016-05-28 16:48:08.200206-04	2016-05-28 16:48:08.200567-04	Geas	You place a magical command on a creature that you can see within range, forcing it to carry out some service or refrain from some action or course of activity as you decide. If the creature can understand you, it must succeed on a Wisdom saving throw or become charmed by you for the duration. While the creature is charmed by you, it takes 5d10 psychic damage each time it acts in a manner directly counter to your instructions, but no more than once each day. A creature that can't understand you is unaffected by the spell.\n You can issue any command you choose, short of an activity that would result in certain death. Should you issue a suicidal command, the spell ends. You can end the spell early by using an action to dismiss it. A remove curse, greater restoration, or wish spell also ends it. At Higher Levels: When you cast this spell using a spell slot of 7th or 8th level, the duration is 1 year. When you cast this spell using a spell slot of the spell lasts until it is ended by one of the spells mentioned above. 	f	1 minute	{V}		60 feet	\N	5	30 days	Enchantment
373	2016-05-28 16:48:08.172079-04	2016-05-28 16:48:08.172254-04	Storm of Vengeance	A churning storm cloud forms, centered on a point you can see and spreading to a radius of 360 feet. Lightning flashes in the area, thunder booms, and strong winds roar. Each creature under the cloud (no more than 5,000 feet beneath the cloud) when it appears must make a Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 5 minutes.\n Each round you maintain concentration on this spell, the storm produces additional effects on your turn. Round 2: Acidic rain falls from the cloud. Each creature and object under the cloud takes 1d6 acid damage. Round 3: You call six bolts of lightning from the cloud to strike six creatures or objects of your choice beneath the cloud. A given creature or object can't be struck by more than one bolt. A struck creature must make a Dexterity saving throw. The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one. Round 4: Hailstones rain down from the cloud. Each creature under the cloud takes 2d6 bludgeoning damage. Round 5-10: Gusts and freezing rain assail the area under the cloud. the area becomes difficult terrain and is heavily obscured. Each creature there takes 1d6 cold damage. Ranged weapon attacks in the area are impossible. The wind and rain count as a severe distraction for the purposes of maintaining concentration on spells. Finally, gusts of strong wind (ranging from 20 to 50 miles per hour) automatically disperse fog, mists, and similar phenomena in the area whether mundane or magical. 	t	1 action	{V,S}		Sight	\N	9	up to 1 minute	Conjuration
374	2016-05-28 16:48:08.173145-04	2016-05-28 16:48:08.173361-04	Eldritch Blast	A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage.\n The spell creates more than one beam when you reach higher levels - two beams at 5th level, three beams at 11th level, and four beams at 17th level. you can direct the beams at the same target or at different ones. Make a separate attack roll for each beam. 	f	1 action	{V,S}		120 feet	\N	0	Instantaneous	Evocation
375	2016-05-28 16:48:08.174144-04	2016-05-28 16:48:08.174342-04	Armor of Agathys	A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot level above 1st. 	f	1 action	{V,S,M}	a cup of water	Self	\N	1	1 hour	Abjuration
376	2016-05-28 16:48:08.175075-04	2016-05-28 16:48:08.175264-04	Arms of Hadar	You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can't take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st. 	f	1 action	{V,S}		Self (10-foot radius)	\N	1	Instantaneous	Conjuration
377	2016-05-28 16:48:08.175985-04	2016-05-28 16:48:08.176167-04	Hex	You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability.\n If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature. A remove curse cast on the target ends this spell early. At Higher Levels: When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours. 	t	1 bonus action	{V,S,M}	the petrified eye of a newt	90 feet	\N	1	up to 1 hour	Enchantment
378	2016-05-28 16:48:08.176859-04	2016-05-28 16:48:08.177034-04	Unseen Servant (ritual)	This spell creates an invisible, mindless, shapeless force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can't attack. If it drops to 0 hit points, the spell ends.\n Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command. If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends. 	f	1 action	{V,S,M}	a piece of string and a bit of wood	60 feet	\N	1	1 hour	Conjuration
379	2016-05-28 16:48:08.177737-04	2016-05-28 16:48:08.177913-04	Hellish Rebuke	You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.\n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st. 	f	1 reaction	{V,S}		60 feet	\N	1	Instantaneous	Evocation
386	2016-05-28 16:48:08.184567-04	2016-05-28 16:48:08.184769-04	Telekinesis	You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell, and as your action each round for the duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round, or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell.\n Creature: You can try to move a Huge or smaller creature. Make an ability check with your spellcasting ability contested by the creature's Strength check. If you win the contest, you move the creature up to 30 feet in any direction, including upward but not beyond the range of this spell. Until the end of your next turn, the creature is restrained in your telekinetic grip. A creature lifted upward is suspended in mid-air. On subsequent rounds, you can use your action to attempt to maintain your telekinetic grip on the creature by repeating the contest. Object: You can try to move an object that weighs up to 1,000 pounds. If the object isn't being worn or carried, you automatically move it up to 30 feet in any direction, but not beyond the range of this spell. If the object is worn or carried by a creature, you must make an ability check with your spellcasting ability contested by that creature's Strength check. If you succeed, you pull the object away from that creature and can move it up to 30 feet in any direction but not beyond the range of this spell. You can exert fine control on objects with your telekinetic grip, such as manipulating a simple tool, opening a door or a container, stowing or retrieving an item from an open container, or pouring the contents from a vial. 	t	1 action	{V,S}		60 feet	\N	5	up to 10 minutes	Transmutation
380	2016-05-28 16:48:08.178617-04	2016-05-28 16:48:08.178843-04	Phantasmal Force	You craft an illusion that takes root in the mind of a creature that you can see within range. The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. This spell has no effect on undead or constructs.\n The phantasm includes sound, temperature, and other stimuli, also evident only to the creature. The target can use its action to examine the phantasm with an Intelligence (Investigation) check against your spell save DC. If the check succeeds, the target realizes that the phantasm is an illusion, and the spell ends. While a target is affected by the spell, the target treats the phantasm as if it were real. The target rationalizes any illogical outcomes from interacting with the phantasm. For example, a target attempting to walk across a phantasmal bridge that spans a chasm falls once it steps onto the bridge. If the target survives the fall, it still believes that the bridge exists and comes up with some other explanation for its fall - it was pushed, it slipped, or a strong wind might have knocked it off. An affected target is so convinced of the phantasm's reality that it can even take damage from the illusion. A phantasm created to appear as a creature can attack the target. Similarly, a phantasm created to appear as fire, a pool of acid, or lava can burn the target. Each round on your turn, the phantasm can deal 1d6 psychic damage to the target if it is in the phantasm's area or within 5 feet of the phantasm, provided that the illusion is of a creature or hazard that could logically deal damage, such as by attacking. The target perceives the damage as a type appropriate to the illusion. 	t	1 action	{V,S,M}	a bit of fleece	60 feet	\N	2	up to 1 minute	Illusion
381	2016-05-28 16:48:08.179666-04	2016-05-28 16:48:08.179855-04	Hunger of Hadar	You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point with range and lasting for the duration. This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are blinded.\n The void creates a warp in the fabric of space, and the area is difficult terrain. Any creature that starts its turn in the area takes 2d6 cold damage. Any creature that ends its turn in the area must succeed on a Dexterity saving throw or take 2d6 acid damage as milky, otherworldly tentacles rub against it. 	t	1 action	{V,S,M}	a pickled octopus tentacle	150 feet	\N	3	up to 1 minute	Conjuration
382	2016-05-28 16:48:08.180562-04	2016-05-28 16:48:08.180744-04	Dominate Beast	You attempt to beguile a beast that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.\n While the beast is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as Attack that creature, Run over there, or Fetch that object. If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability. You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends. At Higher Levels: When you cast this spell with a 5th-level spell slot, the duration is concentration, up to 10 minutes. When you use a 6th-level spell slot, the duration is concentration, up to 1 hour. When you use a spell slot of 7th level or higher, the duration is concentration, up to 8 hours. 	t	1 action	{V,S}		60 feet	\N	4	up to 1 minute	Enchantment
383	2016-05-28 16:48:08.181456-04	2016-05-28 16:48:08.181639-04	Crown of Madness	One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become charmed by you for the duration. While the target is charmed in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes.\n The charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if none are within its reach. On your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the spell ends. 	t	1 action	{V,S}		120 feet	\N	2	up to 1 minute	Enchantment
384	2016-05-28 16:48:08.18234-04	2016-05-28 16:48:08.182534-04	Aura of Life	Life-preserving energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each non-hostile creature in the aura (including you) has resistance to necrotic damage, and its hit point maximum can't be reduced. In addition, a non-hostile, living creature regains 1 hit point when it starts its turn in the aura with 0 hit points.	t	1 action	{V}		Self (30-foot radius)	\N	4	up to 10 minutes	Abjuration
385	2016-05-28 16:48:08.183348-04	2016-05-28 16:48:08.183599-04	Dream	This spell shapes a creature's dreams. Choose a creature known to you as the target of this spell. The target must be on the same plane of existence as you. Creatures that don't sleep, such as elves, can't be contacted by this spell. You, or a willing creature you touch, enters a trance state, acting as a messenger. While in the trance, the messenger is aware of his or her surroundings, but can't take actions or move.\n If the target is asleep, the messenger appears in the target's dreams and can converse with the target as long as it remains asleep, through the duration of the spell. The messenger can also shape the environment of the dream, creating landscapes, objects, and other images. The messenger can emerge from the trance at any time, ending the effect of the spell early. The target recalls the dream perfectly upon waking. If the target is awake when you cast the spell, the messenger knows it, and can either end the trance (and the spell) or wait for the target to fall asleep, at which point the messenger appears in the target's dreams. You can make the messenger appear monstrous and terrifying to the target. If you do, the messenger can deliver a message of no more than ten words and then the target must make a Wisdom saving throw. On a failed save, echoes of the phantasmal monstrosity spawn a nightmare that lasts the duration of the target's sleep and prevents the target from gaining any benefit from that rest. In addition, when the target wakes up, it takes 3d6 psychic damage. If you have a body part, lock of hair, clipping from a nail, or similar portion of the target's body, the target makes its saving throw with disadvantage. 	f	1 minute	{V,S,M}	a handful of sand, a dab of ink, and a writing quill plucked from a sleeping bird	Special	\N	5	8 hours	Illusion
387	2016-05-28 16:48:08.185542-04	2016-05-28 16:48:08.185724-04	Create Undead	(one clay pot filled with grave dirt, one clay pot filled with brackish water, and one 150 gp black onyx stone for each corpse.)You can cast this spell only at night. Choose up to three corpses of Medium or Small humanoids within range. Each corpse becomes a ghoul under your control. (The DM has game statistics for these creatures.)\n As a bonus action on each of your turns, you can mentally command any creature you animated with this spell if the creature is within 120 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command you have given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature before the current 24-hour period ends. This use of the spell reasserts your control over up to three creatures you have animated with this spell, rather than animating new ones. At Higher Levels: When you cast this spell using a 7th-level spell slot, you can animate or reassert control over four ghouls. When you cast this spell using an 8th-level spell slot, you can animate or reassert control over five ghouls or two ghasts or wights. When you cast this spell using a 9th-level spell slot, you can animate or reassert control over six ghouls, three ghasts or wights, or two mummies 	f	1 minute	{V,S,M}		10 feet	\N	6	Instantaneous	Necromancy
388	2016-05-28 16:48:08.18648-04	2016-05-28 16:48:08.18666-04	Plane Shift	You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms, such as the City of Brass on the Elemental Plane of Fire or the palace of Dispater on the second level of the Nine Hells, and you appear in or near that destination. If you are trying to reach the City of Brass, for example, you might arrive in its Street of Steel, before its Gate of Ashes, or looking at the city from across the Sea of Fire, at the DM's discretion.\n Alternatively, if you know the sigil sequence of a teleportation circle on another plane of existence, this spell can take you to that circle. If the teleportation circle is too small to hold all the creatures you transported, they appear in the closest unoccupied spaces next to the circle. You can use this spell to banish an unwilling creature to another plane. Choose a creature within your reach and make a melee spell attack against it. On a hit, the creature must make a Charisma saving throw. If the creature fails the save, it is transported to a random location on the plane of existence you specify. A creature so transported must find its own way back to your current plane of existence. 	f	1 action	{V,S,M}	a forked, metal rod worth at least 250 gp, attuned to a particular plane of existence	Touch	\N	7	Instantaneous	Conjuration
389	2016-05-28 16:48:08.18739-04	2016-05-28 16:48:08.187605-04	Find Steed	You summon a spirit that assumes the form of an unusually intelligent, strong, and loyal steed, creating a long-lasting bond with it. Appearing in an unoccupied space within range, the steed takes on a form that you choose, such as a warhorse, a pony, a camel, an elk, or a mastiff. (Your DM might allow other animals to be summoned as steeds.) The steed has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of its normal type. Additionally, if your steed has an Intelligence of 5 or less, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak.\n Your steed serves you as a mount, both in combat and out, and you have an instinctive bond with it that allows you to fight as a seamless unit. While mounted on your steed, you can make any spell you cast that targets only you also target your steed. When the steed drops to 0 hit points, it disappears, leaving behind no physical form. You can also dismiss your steed at any time as an action, causing it to disappear. In either case, casting this spell again summons the same steed, restored to its hit point maximum. While your steed is within 1 mile of you, you can communicate with it telepathically. You can't have more than one steed bonded by this spell at a time. As an action, you can release the steed from its bond at any time, causing it to disappear. 	f	10 minutes	{V,S}		30 feet	\N	2	Instantaneous	Conjuration
390	2016-05-28 16:48:08.188394-04	2016-05-28 16:48:08.188586-04	Animate Dead	This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the DM has the creature's game statistics).\n On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain the control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot above 3rd. Each of the creatures must come from a different corpse or pile of bones. 	f	1 minute	{V,S,M}	a drop of blood, a piece of flesh, and a pinch of bone dust	10 feet	\N	3	Instantaneous	Necromancy
391	2016-05-28 16:48:08.189291-04	2016-05-28 16:48:08.189476-04	Aura of Vitality	Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points.	t	1 action	{V}		Self (30-foot radius)	\N	3	up to 1 minute	Evocation
392	2016-05-28 16:48:08.190168-04	2016-05-28 16:48:08.190349-04	Blinding Smite	The next time you hit a creature with a melee weapon attack during this spell's duration, you weapon flares with a bright light, and the attack deals an extra 3d8 radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be blinded until the spell ends.\n A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded. 	t	1 bonus action	{V}		Self	\N	3	up to 1 minute	Evocation
396	2016-05-28 16:48:08.193692-04	2016-05-28 16:48:08.193876-04	Confusion	This spell assaults and twists creatures' minds, spawning delusions and provoking uncontrolled actions. Each creature in a 10-foot-radius sphere centered on a point you choose within range must succeed on a Wisdom saving throw when you cast this spell or be affected by it.\n An affected target can't take reactions and must roll a d10 at the start of each of its turns to determine its behavior for that turn. 1: The creature uses all its movement to move in a random direction. To determine the direction, roll a d8 and assign a direction to each die face. The creature doesn't take an action this turn. 2-6: The creature doesn't move or take actions this turn. 7-8: The creature uses its action to make a melee attack against a randomly determined creature within its reach. If there is no creature within its reach, the creature does nothing this turn. 9-10: The creature can act and move normally. At the end of its turns, an affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target. At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the radius of the sphere increases by 5 feet for each slot above 4th. 	t	1 action	{V,S,M}	three nut shells	90 feet	\N	4	up to 1 minute	Enchantment
397	2016-05-28 16:48:08.194643-04	2016-05-28 16:48:08.194833-04	Staggering Smite	The next time you hit a creature with a melee weapon attack during this spell's duration, your weapon pierces both body and mind, and the attack deals an extra 4d6 psychic damage to the target. The target must make a Wisdom saving throw. On a failed save, it has disadvantage on attack rolls and ability checks, and can't take reactions, until the end of its next turn.	t	1 bonus action	{V}		Self	\N	4	up to 1 minute	Evocation
398	2016-05-28 16:48:08.195521-04	2016-05-28 16:48:08.195731-04	Banishing Smite	The next time you hit a creature with a weapon attack before this spell ends, your weapon crackles with force, and the attack deals an extra 5d10 force damage to the target. Additionally, if this attack reduces the target to 50 hit points of fewer, you banish it. If the target is native to a different plane of existence than the one you're on, the target disappears, returning to its home plane. If the target is native to the plane you're on, the creature vanishes into a harmless demiplane. While there, the target is incapacitated. It remains there until the spell ends, at which point the tart reappears in the space it left or in the nearest unoccupied space if that space is occupied.	t	1 bonus action	{V}		Self	\N	5	up to 1 minute	Abjuration
399	2016-05-28 16:48:08.196496-04	2016-05-28 16:48:08.196733-04	Circle of Power	Divine energy radiates from you, distorting and diffusing magical energy within 30 feet of you. Until the spell ends, the sphere moves with you, centered on you. For the duration, each friendly creature in the area (including you) has advantage on saving throws against spells and other magical effects. Additionally, when an affected creature succeeds on a saving throw made against a spell or magical effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw.	t	1 action	{V}		Self (30-foot radius)	\N	5	up to 10 minutes	Abjuration
400	2016-05-28 16:48:08.197763-04	2016-05-28 16:48:08.198017-04	Contagion	Your touch inflicts disease. Make a melee spell attack against a creature within your reach. On a hit, you afflict the creature with a disease of your choice from any of the ones described below.\n At the end of each of the target's turns, it must make a Constitution saving throw. After failing three of these saving throws, the disease's effects last for the duration, and the creature stops making these saves. After succeeding on three of these saving throws, the creature recovers from the disease, and the spell ends. Since this spell induces a natural disease in its target, any effect that removes a disease or otherwise ameliorates a disease's effects apply to it. Blinding Sickness: Pain grips the creature's mind, and its eyes turn milky white. The creature has disadvantage on Wisdom checks and Wisdom saving throws and is blinded. Filth Fever: A raging fever sweeps through the creature's body. The creature has disadvantage on Strength checks, Strength saving throws, and attack rolls that use Strength. Flesh Rot: The creature's flesh decays. The creature has disadvantage on Charisma checks and vulnerability to all damage. Mindfire: The creature's mind becomes feverish. The creature has disadvantage on Intelligence checks and Intelligence saving throws, and the creature behaves as if under the effects of the confusion spell during combat. Seizure: The creature is overcome with shaking. The creature has disadvantage on Dexterity checks, Dexterity saving throws, and attack rolls that use Dexterity. Slimy Doom: The creature begins to bleed uncontrollably. The creature has disadvantage on Constitution checks and Constitution saving throws. In addition, whenever the creature takes damage, it is stunned until the end of its next turn. 	f	1 action	{V,S}		Touch	\N	5	7 days	Necromancy
401	2016-05-28 16:48:08.198922-04	2016-05-28 16:48:08.199121-04	Dominate Person	You attempt to beguile a humanoid that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.\n While the target is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as Attack that creature, Run over there, or Fetch that object. If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability. You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends. At Higher Levels: When you cast this spell using a 6th-level spell slot, the duration is concentration, up to 10 minutes. When you use a 7th-level spell slot, the duration is concentration, up to 1 hour. When you use a spell slot of 8th level or higher, the duration is concentration, up to 8 hours. 	t	1 action	{V,S}		60 feet	\N	5	up to 1 minute	Enchantment
403	2016-05-28 16:48:08.201612-04	2016-05-28 16:48:08.201833-04	Scrying	You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a Wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it. If a target knows you're casting this spell, it can fail the saving throw voluntarily if it wants to be observed.\n Knowledge - Save Modifier Secondhand (you have heard of the target) - +5 Firsthand (you have met the target) +0 Familiar (you know the target well) - -5 Connection - Save Modifier Likeness or picture - -2 Possession or garment - -4 Body part, lock of hair, bit of nail, or the like - -10 On a successful save, the target isn't affected, and you can't use this spell against it again for 24 hours. On a failed save, the spell creates an invisible sensor within 10 feet of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 10 feet of it for the duration. A creature that can see invisible objects sees the sensor as a luminous orb about the size of your fist. Instead of targeting a creature, you can choose a location you have seen before as the target of this spell. When you do, the sensor appears at that location and doesn't move. 	t	10 minutes	{V,S,M}	a focus worth at least 1,000 gp, such as a crystal ball, a silver mirror, or a font filled with holy water	Self	\N	5	up to 10 minutes	Divination
404	2016-05-28 16:48:08.202803-04	2016-05-28 16:48:08.203002-04	Hail of Thorns	The next time you hit a creature with a ranged weapon attack before the spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effect of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes 1d10 piercing damage on a failed save, or half as much damage on a successful one.\n At Higher Levels: If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st (to a maximum of 6d10). 	t	1 bonus action	{V}		Self	\N	1	up to 1 minute	Conjuration
405	2016-05-28 16:48:08.203858-04	2016-05-28 16:48:08.204046-04	Cordon of Arrows	You plant four pieces of nonmagical ammunition - arrows or crossbow bolts - in the ground within range and lay magic upon them to protect an area. Until the spell ends, whenever a creature other than you comes within 30 feet of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take 1d6 piercing damage. The piece of ammunition is then destroyed. The spell ends when no ammunition remains.\n When you cast this spell, you can designate any creatures you choose, and the spell ignores them. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the amount of ammunition that can be affected increases by two for each slot level above 2nd 	f	1 action	{V,S,M}	four or more arrows or bolts	5 feet	\N	2	8 hours	Transmutation
406	2016-05-28 16:48:08.204868-04	2016-05-28 16:48:08.205047-04	Lightning Arrow	The next time you make a ranged weapon attack during the spell's duration, the weapon's ammunition, or the weapon itself if it's a thrown weapon, transforms into a bolt of lightning. Make the attack roll as normal. The target takes 4d8 lightning damage on a hit, or half as much damage on a miss, instead of the weapon's normal damage.\n Whether you hit or miss, each creature within 10 feet of the target must make a Dexterity saving throw. Each of these creatures takes 2d8 lightning damage on a failed save, or half as much damage on a successful one. The piece of ammunition or weapon then returns to its normal form. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage for both effects of the spell increases by 1d8 for each slot level above 3rd. 	t	1 bonus action	{V,S}		Self	\N	3	up to 1 minute	Transmutation
407	2016-05-28 16:48:08.205901-04	2016-05-28 16:48:08.206089-04	Conjure Volley	You fire a piece of nonmagical ammunition from a ranged weapon or throw a nonmagical weapon into the air and choose a point within range. Hundreds of duplicates of the ammunition or weapon fall in a volley from above and then disappear. Each creature in a 40-foot-radius. 20-foot-high cylinder centered on that point must make a Dexterity saving throw. A creature takes 8d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the ammunition or weapon.	f	1 action	{V,S,M}	one piece of ammunition or one thrown weapon	150 feet	\N	5	Instantaneous	Conjuration
408	2016-05-28 16:48:08.206868-04	2016-05-28 16:48:08.207051-04	Swift Quiver	You transmute your quiver so it produces an endless supply of nonmagical ammunition, which seems to leap into your hand when you reach for it.\n On each of your turns until the spell ends, you can use a bonus action to make two attacks with a weapon that uses ammunition from the quiver. Each time you make such a ranged attack, your quiver magically replaces the piece of ammunition you used with a similar piece of nonmagical ammunition. Any pieces of ammunition created by this spell disintegrate when the spell ends. If the quiver leaves your possession, the spell ends. 	t	1 bonus action	{V,S,M}	a quiver containing at least one piece of ammunition	Touch	\N	5	up to 1 minute	Transmutation
\.


--
-- Name: app_spell_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('app_spell_id_seq', 408, true);


--
-- Data for Name: app_spellproperty; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY app_spellproperty (id, subdomain, spell_id) FROM stdin;
\.


--
-- Name: app_spellproperty_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('app_spellproperty_id_seq', 1, false);


--
-- Data for Name: app_subcharacterclass; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY app_subcharacterclass (id, name, skills, skill_choices, armor, weapons, languages, hp_die, saving_throws, parent_class_id) FROM stdin;
\.


--
-- Name: app_subcharacterclass_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('app_subcharacterclass_id_seq', 1, false);


--
-- Data for Name: app_subrace; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY app_subrace (baserace_ptr_id, parent_id) FROM stdin;
3	1
4	1
5	2
6	2
7	1
9	8
10	8
13	12
14	12
\.


--
-- Data for Name: app_trait; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY app_trait (id, name, "desc", item_property_id) FROM stdin;
\.


--
-- Name: app_trait_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('app_trait_id_seq', 1, false);


--
-- Data for Name: app_traitproperty; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY app_traitproperty (id, item_id, trait_id) FROM stdin;
\.


--
-- Name: app_traitproperty_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('app_traitproperty_id_seq', 1, false);


--
-- Data for Name: app_weapon; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY app_weapon (item_ptr_id, damage, dice_count, short_range, long_range, versatile_dmg, versatile_dice, damage_type, special) FROM stdin;
2	6	1	30	120	\N	\N	piercing	\N
3	10	1	\N	\N	\N	\N	slashing	\N
4	4	1	\N	\N	\N	\N	bludgeoning	\N
5	4	1	20	60	\N	\N	piercing	\N
6	8	1	\N	\N	\N	\N	bludgeoning	\N
7	6	1	\N	\N	\N	\N	slashing	\N
9	6	1	\N	\N	\N	\N	bludgeoning	\N
10	6	1	\N	\N	8	1	bludgeoning	\N
11	4	1	\N	\N	\N	\N	slashing	\N
12	6	1	20	60	8	1	piercing	\N
13	8	1	80	320	\N	\N	piercing	\N
14	4	1	20	60	\N	\N	piercing	\N
15	6	1	80	320	\N	\N	piercing	\N
16	4	1	30	120	\N	\N	bludgeoning	\N
17	8	1	\N	\N	10	1	slashing	\N
18	8	1	\N	\N	\N	\N	bludgeoning	\N
20	6	1	\N	\N	\N	\N	slashing	\N
19	12	1	\N	\N	\N	\N	slashing	\N
21	10	1	\N	\N	\N	\N	slashing	\N
22	8	1	\N	\N	10	1	slashing	\N
23	6	1	\N	\N	\N	\N	bludgeoning	\N
24	8	1	\N	\N	\N	\N	bludgeoning	\N
25	10	1	\N	\N	\N	\N	piercing	\N
26	8	1	\N	\N	\N	\N	slashing	\N
27	6	1	\N	\N	\N	\N	slashing	\N
28	6	1	\N	\N	\N	\N	piercing	\N
29	6	1	20	60	8	1	piercing	\N
30	8	1	\N	\N	\N	\N	piercing	\N
31	8	1	\N	\N	10	1	bludgeoning	\N
32	4	1	\N	\N	\N	\N	slashing	\N
33	6	1	30	120	\N	\N	piercing	\N
34	10	1	100	400	\N	\N	piercing	\N
35	8	1	150	600	\N	\N	piercing	\N
8	4	1	20	60	\N	\N	bludgeoning	\N
\.


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY auth_group (id, name) FROM stdin;
\.


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('auth_group_id_seq', 1, false);


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('auth_group_permissions_id_seq', 1, false);


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add content type	1	add_contenttype
2	Can change content type	1	change_contenttype
3	Can delete content type	1	delete_contenttype
4	Can add permission	3	add_permission
5	Can change permission	3	change_permission
6	Can delete permission	3	delete_permission
7	Can add group	2	add_group
8	Can change group	2	change_group
9	Can delete group	2	delete_group
10	Can add session	4	add_session
11	Can change session	4	change_session
12	Can delete session	4	delete_session
13	Can add site	5	add_site
14	Can change site	5	change_site
15	Can delete site	5	delete_site
16	Can add log entry	6	add_logentry
17	Can change log entry	6	change_logentry
18	Can delete log entry	6	delete_logentry
19	Can add cors model	7	add_corsmodel
20	Can change cors model	7	change_corsmodel
21	Can delete cors model	7	delete_corsmodel
22	Can add source	10	add_source
23	Can change source	10	change_source
24	Can delete source	10	delete_source
25	Can add thumbnail	8	add_thumbnail
26	Can change thumbnail	8	change_thumbnail
27	Can delete thumbnail	8	delete_thumbnail
28	Can add thumbnail dimensions	9	add_thumbnaildimensions
29	Can change thumbnail dimensions	9	change_thumbnaildimensions
30	Can delete thumbnail dimensions	9	delete_thumbnaildimensions
31	Can add registration profile	11	add_registrationprofile
32	Can change registration profile	11	change_registrationprofile
33	Can delete registration profile	11	delete_registrationprofile
34	Can add user social auth	13	add_usersocialauth
35	Can change user social auth	13	change_usersocialauth
36	Can delete user social auth	13	delete_usersocialauth
37	Can add nonce	14	add_nonce
38	Can change nonce	14	change_nonce
39	Can delete nonce	14	delete_nonce
40	Can add association	12	add_association
41	Can change association	12	change_association
42	Can delete association	12	delete_association
43	Can add code	15	add_code
44	Can change code	15	change_code
45	Can delete code	15	delete_code
46	Can add base race	21	add_baserace
47	Can change base race	21	change_baserace
48	Can delete base race	21	delete_baserace
49	Can add sub race	23	add_subrace
50	Can change sub race	23	change_subrace
51	Can delete sub race	23	delete_subrace
52	Can add parent race	22	add_parentrace
53	Can change parent race	22	change_parentrace
54	Can delete parent race	22	delete_parentrace
55	Can add parent character class	24	add_parentcharacterclass
56	Can change parent character class	24	change_parentcharacterclass
57	Can delete parent character class	24	delete_parentcharacterclass
58	Can add sub character class	28	add_subcharacterclass
59	Can change sub character class	28	change_subcharacterclass
60	Can delete sub character class	28	delete_subcharacterclass
61	Can add racial trait	27	add_racialtrait
62	Can change racial trait	27	change_racialtrait
63	Can delete racial trait	27	delete_racialtrait
64	Can add item	18	add_item
65	Can change item	18	change_item
66	Can delete item	18	delete_item
67	Can add weapon	20	add_weapon
68	Can change weapon	20	change_weapon
69	Can delete weapon	20	delete_weapon
70	Can add armor	16	add_armor
71	Can change armor	16	change_armor
72	Can delete armor	16	delete_armor
73	Can add trait property	25	add_traitproperty
74	Can change trait property	25	change_traitproperty
75	Can delete trait property	25	delete_traitproperty
76	Can add trait	17	add_trait
77	Can change trait	17	change_trait
78	Can delete trait	17	delete_trait
79	Can add spell	19	add_spell
80	Can change spell	19	change_spell
81	Can delete spell	19	delete_spell
82	Can add spell property	29	add_spellproperty
83	Can change spell property	29	change_spellproperty
84	Can delete spell property	29	delete_spellproperty
85	Can add player	26	add_player
86	Can change player	26	change_player
87	Can delete player	26	delete_player
88	Can add user	30	add_user
89	Can change user	30	change_user
90	Can delete user	30	delete_user
91	Can add test file model	31	add_testfilemodel
92	Can change test file model	31	change_testfilemodel
93	Can delete test file model	31	delete_testfilemodel
94	Can add skill	32	add_skill
95	Can change skill	32	change_skill
96	Can delete skill	32	delete_skill
\.


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('auth_permission_id_seq', 96, true);


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2016-05-28 22:48:45.397324-04	1	Elf	1	Added. Added racial trait "Keen Senses - Elf". Added racial trait "Fey Ancestry (Sleep) - Elf". Added racial trait "Fey Ancestry (Charm) - Elf". Added racial trait "Trance - Elf".	22	1
2	2016-05-28 22:49:36.523631-04	2	Dwarf	1	Added.	22	1
3	2016-05-30 18:58:42.578585-04	3	Wood Elf	1	Added. Added racial trait "Mask of the Wild - Wood Elf".	23	1
4	2016-05-30 19:00:35.785183-04	4	Drow Elf	1	Added. Added racial trait "Sunlight Sensitivity - Drow Elf". Added racial trait "Drow Magic - Drow Elf". Added racial trait "Superior Darkvision - Drow Elf".	23	1
5	2016-05-30 19:01:54.654513-04	5	Hill Dwarf	1	Added. Added racial trait "Dwarven Toughness - Hill Dwarf".	23	1
6	2016-05-30 19:02:20.786066-04	6	Mountain Dwarf	1	Added.	23	1
7	2016-05-30 19:03:59.789662-04	7	High Elf	1	Added. Added racial trait "Cantrip - High Elf". Added racial trait "Extra Language - High Elf".	23	1
8	2016-05-30 19:06:50.620038-04	8	Halfling	1	Added. Added racial trait "Lucky - Halfling". Added racial trait "Brave - Halfling". Added racial trait "Halfling Nimbleness - Halfling".	22	1
9	2016-05-30 19:09:52.428751-04	9	Lightfoot Halfling	1	Added. Added racial trait "Naturally Stealthy - Lightfoot Halfling".	23	1
10	2016-05-30 19:11:33.211674-04	10	Stout Halfling	1	Added. Added racial trait "Stout Resilience (advantage) - Stout Halfling". Added racial trait "Stout Resilience (resist) - Stout Halfling".	23	1
11	2016-05-30 19:13:20.295994-04	11	Human	1	Added. Added racial trait "Extra Language - Human".	22	1
12	2016-05-30 19:14:09.892767-04	12	Dragonborn	1	Added.	22	1
13	2016-05-30 19:15:56.156227-04	13	Black Dragonborn	1	Added. Added racial trait "Breath Weapon (Acid) - Black Dragonborn". Added racial trait "Damage Resistance (Acid) - Black Dragonborn".	23	1
14	2016-05-30 19:17:07.239121-04	14	Blue Dragonborn	1	Added. Added racial trait "Breath Weapon (Lightning) - Blue Dragonborn". Added racial trait "Damage Resistance (Lightning) - Blue Dragonborn".	23	1
15	2016-06-05 19:15:22.523856-04	1	Elf	2	Changed skills.	22	1
16	2016-06-06 00:42:36.54453-04	1	Elf	2	Changed skills.	22	1
\.


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('django_admin_log_id_seq', 16, true);


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY django_content_type (id, app_label, model) FROM stdin;
1	contenttypes	contenttype
2	auth	group
3	auth	permission
4	sessions	session
5	sites	site
6	admin	logentry
7	corsheaders	corsmodel
8	easy_thumbnails	thumbnail
9	easy_thumbnails	thumbnaildimensions
10	easy_thumbnails	source
11	registration	registrationprofile
12	default	association
13	default	usersocialauth
14	default	nonce
15	default	code
16	app	armor
17	app	trait
18	app	item
19	app	spell
20	app	weapon
21	app	baserace
22	app	parentrace
23	app	subrace
24	app	parentcharacterclass
25	app	traitproperty
26	app	player
27	app	racialtrait
28	app	subcharacterclass
29	app	spellproperty
30	account	user
31	util	testfilemodel
32	app	skill
\.


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('django_content_type_id_seq', 32, true);


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2016-05-28 16:47:23.709872-04
2	contenttypes	0002_remove_content_type_name	2016-05-28 16:47:23.721086-04
3	auth	0001_initial	2016-05-28 16:47:23.76088-04
4	auth	0002_alter_permission_name_max_length	2016-05-28 16:47:23.776298-04
5	auth	0003_alter_user_email_max_length	2016-05-28 16:47:23.793-04
6	auth	0004_alter_user_username_opts	2016-05-28 16:47:23.813093-04
7	auth	0005_alter_user_last_login_null	2016-05-28 16:47:23.82506-04
8	auth	0006_require_contenttypes_0002	2016-05-28 16:47:23.826903-04
9	account	0001_initial	2016-05-28 16:47:23.885024-04
10	admin	0001_initial	2016-05-28 16:47:23.919484-04
11	admin	0002_logentry_remove_auto_add	2016-05-28 16:47:23.950449-04
12	app	0001_initial	2016-05-28 16:47:24.16385-04
13	auth	0007_alter_validators_add_error_messages	2016-05-28 16:47:24.180736-04
14	default	0001_initial	2016-05-28 16:47:24.280225-04
15	default	0002_add_related_name	2016-05-28 16:47:24.312893-04
16	default	0003_alter_email_max_length	2016-05-28 16:47:24.326189-04
17	easy_thumbnails	0001_initial	2016-05-28 16:47:24.398958-04
18	easy_thumbnails	0002_thumbnaildimensions	2016-05-28 16:47:24.416122-04
19	registration	0001_initial	2016-05-28 16:47:24.472373-04
20	registration	0002_registrationprofile_activated	2016-05-28 16:47:24.560937-04
21	registration	0003_migrate_activatedstatus	2016-05-28 16:47:24.580399-04
22	sessions	0001_initial	2016-05-28 16:47:24.593855-04
23	sites	0001_initial	2016-05-28 16:47:24.610277-04
24	sites	0002_alter_domain_unique	2016-05-28 16:47:24.624772-04
25	util	0001_initial	2016-05-28 16:47:24.637852-04
26	app	0002_skill	2016-05-29 15:00:49.856273-04
27	app	0003_auto_20160605_2210	2016-06-05 18:10:58.660141-04
\.


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('django_migrations_id_seq', 27, true);


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY django_session (session_key, session_data, expire_date) FROM stdin;
uyw9po6o54k3ol2l1eq54x470jyz395k	MmMwNWQ4YzJjOGNiMDlhZTg2MDRhOGFiNDFlNDcxODkxZTdkZjk5Mzp7Il9hdXRoX3VzZXJfaGFzaCI6ImQyMGU0NmViMTRiM2M5YzM1MmNmODQ4NWU2MTY4YmZkNzM2YTQ3ZmQiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=	2016-06-11 17:11:24.417186-04
xlvnxvxb6odvsfjuf01myv524nevjmtn	M2Y2OWQ0MGM1ZDRlYWI5ZDFiNzEzOWI2Y2FmZjNmNWY2OTk3NDQyMjp7Il9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiZDIwZTQ2ZWIxNGIzYzljMzUyY2Y4NDg1ZTYxNjhiZmQ3MzZhNDdmZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=	2016-06-18 14:43:50.216799-04
\.


--
-- Data for Name: django_site; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY django_site (id, domain, name) FROM stdin;
1	example.com	example.com
\.


--
-- Name: django_site_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('django_site_id_seq', 1, true);


--
-- Data for Name: easy_thumbnails_source; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY easy_thumbnails_source (id, storage_hash, name, modified) FROM stdin;
\.


--
-- Name: easy_thumbnails_source_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('easy_thumbnails_source_id_seq', 1, false);


--
-- Data for Name: easy_thumbnails_thumbnail; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY easy_thumbnails_thumbnail (id, storage_hash, name, modified, source_id) FROM stdin;
\.


--
-- Name: easy_thumbnails_thumbnail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('easy_thumbnails_thumbnail_id_seq', 1, false);


--
-- Data for Name: easy_thumbnails_thumbnaildimensions; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY easy_thumbnails_thumbnaildimensions (id, thumbnail_id, width, height) FROM stdin;
\.


--
-- Name: easy_thumbnails_thumbnaildimensions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('easy_thumbnails_thumbnaildimensions_id_seq', 1, false);


--
-- Data for Name: registration_registrationprofile; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY registration_registrationprofile (id, activation_key, user_id, activated) FROM stdin;
\.


--
-- Name: registration_registrationprofile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('registration_registrationprofile_id_seq', 1, false);


--
-- Data for Name: social_auth_association; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY social_auth_association (id, server_url, handle, secret, issued, lifetime, assoc_type) FROM stdin;
\.


--
-- Name: social_auth_association_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('social_auth_association_id_seq', 1, false);


--
-- Data for Name: social_auth_code; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY social_auth_code (id, email, code, verified) FROM stdin;
\.


--
-- Name: social_auth_code_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('social_auth_code_id_seq', 1, false);


--
-- Data for Name: social_auth_nonce; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY social_auth_nonce (id, server_url, "timestamp", salt) FROM stdin;
\.


--
-- Name: social_auth_nonce_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('social_auth_nonce_id_seq', 1, false);


--
-- Data for Name: social_auth_usersocialauth; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY social_auth_usersocialauth (id, provider, uid, extra_data, user_id) FROM stdin;
\.


--
-- Name: social_auth_usersocialauth_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('social_auth_usersocialauth_id_seq', 1, false);


--
-- Data for Name: util_testfilemodel; Type: TABLE DATA; Schema: public; Owner: fifth_ed_spells
--

COPY util_testfilemodel (id, file_field) FROM stdin;
\.


--
-- Name: util_testfilemodel_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fifth_ed_spells
--

SELECT pg_catalog.setval('util_testfilemodel_id_seq', 1, false);


--
-- Name: account_user_email_key; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY account_user
    ADD CONSTRAINT account_user_email_key UNIQUE (email);


--
-- Name: account_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY account_user_groups
    ADD CONSTRAINT account_user_groups_pkey PRIMARY KEY (id);


--
-- Name: account_user_groups_user_id_4d09af3e_uniq; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY account_user_groups
    ADD CONSTRAINT account_user_groups_user_id_4d09af3e_uniq UNIQUE (user_id, group_id);


--
-- Name: account_user_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY account_user
    ADD CONSTRAINT account_user_pkey PRIMARY KEY (id);


--
-- Name: account_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY account_user_user_permissions
    ADD CONSTRAINT account_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: account_user_user_permissions_user_id_48bdd28b_uniq; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY account_user_user_permissions
    ADD CONSTRAINT account_user_user_permissions_user_id_48bdd28b_uniq UNIQUE (user_id, permission_id);


--
-- Name: app_armor_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY app_armor
    ADD CONSTRAINT app_armor_pkey PRIMARY KEY (item_ptr_id);


--
-- Name: app_baserace_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY app_baserace
    ADD CONSTRAINT app_baserace_pkey PRIMARY KEY (id);


--
-- Name: app_item_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY app_item
    ADD CONSTRAINT app_item_pkey PRIMARY KEY (id);


--
-- Name: app_parentcharacterclass_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY app_parentcharacterclass
    ADD CONSTRAINT app_parentcharacterclass_pkey PRIMARY KEY (id);


--
-- Name: app_parentrace_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY app_parentrace
    ADD CONSTRAINT app_parentrace_pkey PRIMARY KEY (baserace_ptr_id);


--
-- Name: app_player_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY app_player
    ADD CONSTRAINT app_player_pkey PRIMARY KEY (id);


--
-- Name: app_racialtrait_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY app_racialtrait
    ADD CONSTRAINT app_racialtrait_pkey PRIMARY KEY (id);


--
-- Name: app_skill_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY app_skill
    ADD CONSTRAINT app_skill_pkey PRIMARY KEY (id);


--
-- Name: app_spell_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY app_spell
    ADD CONSTRAINT app_spell_pkey PRIMARY KEY (id);


--
-- Name: app_spellproperty_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY app_spellproperty
    ADD CONSTRAINT app_spellproperty_pkey PRIMARY KEY (id);


--
-- Name: app_subcharacterclass_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY app_subcharacterclass
    ADD CONSTRAINT app_subcharacterclass_pkey PRIMARY KEY (id);


--
-- Name: app_subrace_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY app_subrace
    ADD CONSTRAINT app_subrace_pkey PRIMARY KEY (baserace_ptr_id);


--
-- Name: app_trait_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY app_trait
    ADD CONSTRAINT app_trait_pkey PRIMARY KEY (id);


--
-- Name: app_traitproperty_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY app_traitproperty
    ADD CONSTRAINT app_traitproperty_pkey PRIMARY KEY (id);


--
-- Name: app_weapon_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY app_weapon
    ADD CONSTRAINT app_weapon_pkey PRIMARY KEY (item_ptr_id);


--
-- Name: auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions_group_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission_content_type_id_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type_app_label_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY django_content_type
    ADD CONSTRAINT django_content_type_app_label_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: django_site_domain_a2e37b91_uniq; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY django_site
    ADD CONSTRAINT django_site_domain_a2e37b91_uniq UNIQUE (domain);


--
-- Name: django_site_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY django_site
    ADD CONSTRAINT django_site_pkey PRIMARY KEY (id);


--
-- Name: easy_thumbnails_source_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY easy_thumbnails_source
    ADD CONSTRAINT easy_thumbnails_source_pkey PRIMARY KEY (id);


--
-- Name: easy_thumbnails_source_storage_hash_481ce32d_uniq; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY easy_thumbnails_source
    ADD CONSTRAINT easy_thumbnails_source_storage_hash_481ce32d_uniq UNIQUE (storage_hash, name);


--
-- Name: easy_thumbnails_thumbnail_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY easy_thumbnails_thumbnail
    ADD CONSTRAINT easy_thumbnails_thumbnail_pkey PRIMARY KEY (id);


--
-- Name: easy_thumbnails_thumbnail_storage_hash_fb375270_uniq; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY easy_thumbnails_thumbnail
    ADD CONSTRAINT easy_thumbnails_thumbnail_storage_hash_fb375270_uniq UNIQUE (storage_hash, name, source_id);


--
-- Name: easy_thumbnails_thumbnaildimensions_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY easy_thumbnails_thumbnaildimensions
    ADD CONSTRAINT easy_thumbnails_thumbnaildimensions_pkey PRIMARY KEY (id);


--
-- Name: easy_thumbnails_thumbnaildimensions_thumbnail_id_key; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY easy_thumbnails_thumbnaildimensions
    ADD CONSTRAINT easy_thumbnails_thumbnaildimensions_thumbnail_id_key UNIQUE (thumbnail_id);


--
-- Name: registration_registrationprofile_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY registration_registrationprofile
    ADD CONSTRAINT registration_registrationprofile_pkey PRIMARY KEY (id);


--
-- Name: registration_registrationprofile_user_id_key; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY registration_registrationprofile
    ADD CONSTRAINT registration_registrationprofile_user_id_key UNIQUE (user_id);


--
-- Name: social_auth_association_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY social_auth_association
    ADD CONSTRAINT social_auth_association_pkey PRIMARY KEY (id);


--
-- Name: social_auth_code_email_801b2d02_uniq; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY social_auth_code
    ADD CONSTRAINT social_auth_code_email_801b2d02_uniq UNIQUE (email, code);


--
-- Name: social_auth_code_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY social_auth_code
    ADD CONSTRAINT social_auth_code_pkey PRIMARY KEY (id);


--
-- Name: social_auth_nonce_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY social_auth_nonce
    ADD CONSTRAINT social_auth_nonce_pkey PRIMARY KEY (id);


--
-- Name: social_auth_nonce_server_url_f6284463_uniq; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY social_auth_nonce
    ADD CONSTRAINT social_auth_nonce_server_url_f6284463_uniq UNIQUE (server_url, "timestamp", salt);


--
-- Name: social_auth_usersocialauth_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY social_auth_usersocialauth
    ADD CONSTRAINT social_auth_usersocialauth_pkey PRIMARY KEY (id);


--
-- Name: social_auth_usersocialauth_provider_e6b5e668_uniq; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY social_auth_usersocialauth
    ADD CONSTRAINT social_auth_usersocialauth_provider_e6b5e668_uniq UNIQUE (provider, uid);


--
-- Name: util_testfilemodel_pkey; Type: CONSTRAINT; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

ALTER TABLE ONLY util_testfilemodel
    ADD CONSTRAINT util_testfilemodel_pkey PRIMARY KEY (id);


--
-- Name: account_user_email_0bd7c421_like; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX account_user_email_0bd7c421_like ON account_user USING btree (email varchar_pattern_ops);


--
-- Name: account_user_groups_0e939a4f; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX account_user_groups_0e939a4f ON account_user_groups USING btree (group_id);


--
-- Name: account_user_groups_e8701ad4; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX account_user_groups_e8701ad4 ON account_user_groups USING btree (user_id);


--
-- Name: account_user_user_permissions_8373b171; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX account_user_user_permissions_8373b171 ON account_user_user_permissions USING btree (permission_id);


--
-- Name: account_user_user_permissions_e8701ad4; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX account_user_user_permissions_e8701ad4 ON account_user_user_permissions USING btree (user_id);


--
-- Name: app_player_afe72417; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX app_player_afe72417 ON app_player USING btree (player_id);


--
-- Name: app_racialtrait_3f2f3687; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX app_racialtrait_3f2f3687 ON app_racialtrait USING btree (race_id);


--
-- Name: app_spellproperty_26fc65fa; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX app_spellproperty_26fc65fa ON app_spellproperty USING btree (spell_id);


--
-- Name: app_subcharacterclass_ad951ae3; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX app_subcharacterclass_ad951ae3 ON app_subcharacterclass USING btree (parent_class_id);


--
-- Name: app_subrace_6be37982; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX app_subrace_6be37982 ON app_subrace USING btree (parent_id);


--
-- Name: app_trait_2f4856d1; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX app_trait_2f4856d1 ON app_trait USING btree (item_property_id);


--
-- Name: app_traitproperty_82bfda79; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX app_traitproperty_82bfda79 ON app_traitproperty USING btree (item_id);


--
-- Name: app_traitproperty_d03d97c0; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX app_traitproperty_d03d97c0 ON app_traitproperty USING btree (trait_id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX auth_group_name_a6ea08ec_like ON auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_0e939a4f; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX auth_group_permissions_0e939a4f ON auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_8373b171; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX auth_group_permissions_8373b171 ON auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_417f1b1c; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX auth_permission_417f1b1c ON auth_permission USING btree (content_type_id);


--
-- Name: django_admin_log_417f1b1c; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX django_admin_log_417f1b1c ON django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_e8701ad4; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX django_admin_log_e8701ad4 ON django_admin_log USING btree (user_id);


--
-- Name: django_session_de54fa62; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX django_session_de54fa62 ON django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX django_session_session_key_c0390e0f_like ON django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: django_site_domain_a2e37b91_like; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX django_site_domain_a2e37b91_like ON django_site USING btree (domain varchar_pattern_ops);


--
-- Name: easy_thumbnails_source_b068931c; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX easy_thumbnails_source_b068931c ON easy_thumbnails_source USING btree (name);


--
-- Name: easy_thumbnails_source_b454e115; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX easy_thumbnails_source_b454e115 ON easy_thumbnails_source USING btree (storage_hash);


--
-- Name: easy_thumbnails_source_name_5fe0edc6_like; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX easy_thumbnails_source_name_5fe0edc6_like ON easy_thumbnails_source USING btree (name varchar_pattern_ops);


--
-- Name: easy_thumbnails_source_storage_hash_946cbcc9_like; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX easy_thumbnails_source_storage_hash_946cbcc9_like ON easy_thumbnails_source USING btree (storage_hash varchar_pattern_ops);


--
-- Name: easy_thumbnails_thumbnail_0afd9202; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX easy_thumbnails_thumbnail_0afd9202 ON easy_thumbnails_thumbnail USING btree (source_id);


--
-- Name: easy_thumbnails_thumbnail_b068931c; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX easy_thumbnails_thumbnail_b068931c ON easy_thumbnails_thumbnail USING btree (name);


--
-- Name: easy_thumbnails_thumbnail_b454e115; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX easy_thumbnails_thumbnail_b454e115 ON easy_thumbnails_thumbnail USING btree (storage_hash);


--
-- Name: easy_thumbnails_thumbnail_name_b5882c31_like; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX easy_thumbnails_thumbnail_name_b5882c31_like ON easy_thumbnails_thumbnail USING btree (name varchar_pattern_ops);


--
-- Name: easy_thumbnails_thumbnail_storage_hash_f1435f49_like; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX easy_thumbnails_thumbnail_storage_hash_f1435f49_like ON easy_thumbnails_thumbnail USING btree (storage_hash varchar_pattern_ops);


--
-- Name: social_auth_code_c1336794; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX social_auth_code_c1336794 ON social_auth_code USING btree (code);


--
-- Name: social_auth_code_code_a2393167_like; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX social_auth_code_code_a2393167_like ON social_auth_code USING btree (code varchar_pattern_ops);


--
-- Name: social_auth_usersocialauth_e8701ad4; Type: INDEX; Schema: public; Owner: fifth_ed_spells; Tablespace: 
--

CREATE INDEX social_auth_usersocialauth_e8701ad4 ON social_auth_usersocialauth USING btree (user_id);


--
-- Name: account_user_groups_group_id_6c71f749_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY account_user_groups
    ADD CONSTRAINT account_user_groups_group_id_6c71f749_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: account_user_groups_user_id_14345e7b_fk_account_user_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY account_user_groups
    ADD CONSTRAINT account_user_groups_user_id_14345e7b_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: account_user_user__permission_id_66c44191_fk_auth_permission_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY account_user_user_permissions
    ADD CONSTRAINT account_user_user__permission_id_66c44191_fk_auth_permission_id FOREIGN KEY (permission_id) REFERENCES auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: account_user_user_permissio_user_id_cc42d270_fk_account_user_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY account_user_user_permissions
    ADD CONSTRAINT account_user_user_permissio_user_id_cc42d270_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: app_armor_item_ptr_id_dd7d914c_fk_app_item_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_armor
    ADD CONSTRAINT app_armor_item_ptr_id_dd7d914c_fk_app_item_id FOREIGN KEY (item_ptr_id) REFERENCES app_item(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: app_parentrace_baserace_ptr_id_72452895_fk_app_baserace_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_parentrace
    ADD CONSTRAINT app_parentrace_baserace_ptr_id_72452895_fk_app_baserace_id FOREIGN KEY (baserace_ptr_id) REFERENCES app_baserace(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: app_player_player_id_e30bcfb7_fk_account_user_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_player
    ADD CONSTRAINT app_player_player_id_e30bcfb7_fk_account_user_id FOREIGN KEY (player_id) REFERENCES account_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: app_racialtrait_race_id_16f23adf_fk_app_baserace_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_racialtrait
    ADD CONSTRAINT app_racialtrait_race_id_16f23adf_fk_app_baserace_id FOREIGN KEY (race_id) REFERENCES app_baserace(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: app_spellproperty_spell_id_fb5aa7a9_fk_app_spell_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_spellproperty
    ADD CONSTRAINT app_spellproperty_spell_id_fb5aa7a9_fk_app_spell_id FOREIGN KEY (spell_id) REFERENCES app_spell(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: app_sub_parent_class_id_b15516bb_fk_app_parentcharacterclass_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_subcharacterclass
    ADD CONSTRAINT app_sub_parent_class_id_b15516bb_fk_app_parentcharacterclass_id FOREIGN KEY (parent_class_id) REFERENCES app_parentcharacterclass(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: app_subrac_parent_id_294494e8_fk_app_parentrace_baserace_ptr_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_subrace
    ADD CONSTRAINT app_subrac_parent_id_294494e8_fk_app_parentrace_baserace_ptr_id FOREIGN KEY (parent_id) REFERENCES app_parentrace(baserace_ptr_id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: app_subrace_baserace_ptr_id_cc1b98c3_fk_app_baserace_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_subrace
    ADD CONSTRAINT app_subrace_baserace_ptr_id_cc1b98c3_fk_app_baserace_id FOREIGN KEY (baserace_ptr_id) REFERENCES app_baserace(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: app_trait_item_property_id_c9b053ac_fk_app_traitproperty_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_trait
    ADD CONSTRAINT app_trait_item_property_id_c9b053ac_fk_app_traitproperty_id FOREIGN KEY (item_property_id) REFERENCES app_traitproperty(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: app_traitproperty_item_id_c59b9deb_fk_app_item_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_traitproperty
    ADD CONSTRAINT app_traitproperty_item_id_c59b9deb_fk_app_item_id FOREIGN KEY (item_id) REFERENCES app_item(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: app_traitproperty_trait_id_8003b31f_fk_app_trait_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_traitproperty
    ADD CONSTRAINT app_traitproperty_trait_id_8003b31f_fk_app_trait_id FOREIGN KEY (trait_id) REFERENCES app_trait(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: app_weapon_item_ptr_id_645096b4_fk_app_item_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY app_weapon
    ADD CONSTRAINT app_weapon_item_ptr_id_645096b4_fk_app_item_id FOREIGN KEY (item_ptr_id) REFERENCES app_item(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permiss_permission_id_84c5c92e_fk_auth_permission_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY auth_group_permissions
    ADD CONSTRAINT auth_group_permiss_permission_id_84c5c92e_fk_auth_permission_id FOREIGN KEY (permission_id) REFERENCES auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permiss_content_type_id_2f476e4b_fk_django_content_type_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY auth_permission
    ADD CONSTRAINT auth_permiss_content_type_id_2f476e4b_fk_django_content_type_id FOREIGN KEY (content_type_id) REFERENCES django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_content_type_id_c4bce8eb_fk_django_content_type_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY django_admin_log
    ADD CONSTRAINT django_admin_content_type_id_c4bce8eb_fk_django_content_type_id FOREIGN KEY (content_type_id) REFERENCES django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log_user_id_c564eba6_fk_account_user_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: easy_thum_thumbnail_id_c3a0c549_fk_easy_thumbnails_thumbnail_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY easy_thumbnails_thumbnaildimensions
    ADD CONSTRAINT easy_thum_thumbnail_id_c3a0c549_fk_easy_thumbnails_thumbnail_id FOREIGN KEY (thumbnail_id) REFERENCES easy_thumbnails_thumbnail(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: easy_thumbnails_source_id_5b57bc77_fk_easy_thumbnails_source_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY easy_thumbnails_thumbnail
    ADD CONSTRAINT easy_thumbnails_source_id_5b57bc77_fk_easy_thumbnails_source_id FOREIGN KEY (source_id) REFERENCES easy_thumbnails_source(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: registration_registrationpr_user_id_5fcbf725_fk_account_user_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY registration_registrationprofile
    ADD CONSTRAINT registration_registrationpr_user_id_5fcbf725_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: social_auth_usersocialauth_user_id_17d28448_fk_account_user_id; Type: FK CONSTRAINT; Schema: public; Owner: fifth_ed_spells
--

ALTER TABLE ONLY social_auth_usersocialauth
    ADD CONSTRAINT social_auth_usersocialauth_user_id_17d28448_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: public; Type: ACL; Schema: -; Owner: Matt
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM "Matt";
GRANT ALL ON SCHEMA public TO "Matt";
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

