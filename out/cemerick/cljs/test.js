// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('cemerick.cljs.test');
goog.require('cljs.core');
goog.require('clojure.string');
cemerick.cljs.test._STAR_test_print_fn_STAR_ = null;
cemerick.cljs.test._STAR_entry_point_STAR_ = true;
cemerick.cljs.test._STAR_test_ctx_STAR_ = null;
cemerick.cljs.test.init_test_environment_STAR_ = (function cemerick$cljs$test$init_test_environment_STAR_(aux_data){
var G__12610 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$test,(0),cljs.core.cst$kw$pass,(0),cljs.core.cst$kw$fail,(0),cljs.core.cst$kw$error,(0)], null),(cljs.core.truth_(cemerick.cljs.test._STAR_test_print_fn_STAR_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cemerick$cljs$test_SLASH_test_DASH_print_DASH_fn,cemerick.cljs.test._STAR_test_print_fn_STAR_], null):null)], 0)),cljs.core.cst$kw$cemerick$cljs$test_SLASH_test_DASH_contexts,cljs.core.List.EMPTY),aux_data], 0));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12610) : cljs.core.atom.call(null,G__12610));
});
cemerick.cljs.test.init_test_environment = (function cemerick$cljs$test$init_test_environment(){
var G__12612 = cemerick.cljs.test.init_test_environment_STAR_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cemerick$cljs$test_SLASH_test_DASH_functions,cljs.core.List.EMPTY], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(G__12612,cljs.core.assoc,cljs.core.cst$kw$async,cemerick.cljs.test.init_test_environment_STAR_(cljs.core.PersistentArrayMap.EMPTY));

return G__12612;
});
cemerick.cljs.test.registered_tests = (function (){var G__12613 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12613) : cljs.core.atom.call(null,G__12613));
})();
cemerick.cljs.test.registered_test_hooks = (function (){var G__12614 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12614) : cljs.core.atom.call(null,G__12614));
})();
cemerick.cljs.test.registered_fixtures = (function (){var G__12615 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12615) : cljs.core.atom.call(null,G__12615));
})();
cemerick.cljs.test.register_test_BANG_ = (function cemerick$cljs$test$register_test_BANG_(ns,name,fn){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cemerick.cljs.test.registered_tests,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null),cljs.core.assoc,cljs.core.array_seq([name,fn], 0));
});
cemerick.cljs.test.register_test_ns_hook_BANG_ = (function cemerick$cljs$test$register_test_ns_hook_BANG_(ns,name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cemerick.cljs.test.registered_test_hooks,cljs.core.assoc,ns,name);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cemerick.cljs.test.TestContext = (function (test_env,test_name,__meta,__extmap,__hash){
this.test_env = test_env;
this.test_name = test_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cemerick.cljs.test.TestContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6770__auto____$1,k__6771__auto__,null);
});

cemerick.cljs.test.TestContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k12617,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__12619 = (((k12617 instanceof cljs.core.Keyword))?k12617.fqn:null);
switch (G__12619) {
case "test-env":
return self__.test_env;

break;
case "test-name":
return self__.test_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12617,else__6773__auto__);

}
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer(writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6785__auto__,pr_pair__6787__auto__,"#cemerick.cljs.test.TestContext{",", ","}",opts__6786__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$test_DASH_env,self__.test_env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$test_DASH_name,self__.test_name],null))], null),self__.__extmap));
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IIterable$ = true;

cemerick.cljs.test.TestContext.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12616){
var self__ = this;
var G__12616__$1 = this;
return (new cljs.core.RecordIter((0),G__12616__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$test_DASH_env,cljs.core.cst$kw$test_DASH_name], null),cljs.core._iterator(self__.__extmap)));
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

cemerick.cljs.test.TestContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,self__.__extmap,self__.__hash));
});

cemerick.cljs.test.TestContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
var self__ = this;
var this__6765__auto____$1 = this;
var h__6591__auto__ = self__.__hash;
if(!((h__6591__auto__ == null))){
return h__6591__auto__;
} else {
var h__6591__auto____$1 = cljs.core.hash_imap(this__6765__auto____$1);
self__.__hash = h__6591__auto____$1;

return h__6591__auto____$1;
}
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
var self__ = this;
var this__6766__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6144__auto__ = other__6767__auto__;
if(cljs.core.truth_(and__6144__auto__)){
var and__6144__auto____$1 = (this__6766__auto____$1.constructor === other__6767__auto__.constructor);
if(and__6144__auto____$1){
return cljs.core.equiv_map(this__6766__auto____$1,other__6767__auto__);
} else {
return and__6144__auto____$1;
}
} else {
return and__6144__auto__;
}
})())){
return true;
} else {
return false;
}
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$test_DASH_env,null,cljs.core.cst$kw$test_DASH_name,null], null), null),k__6780__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6780__auto__)),null));
}
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__12616){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__12620 = cljs.core.keyword_identical_QMARK_;
var expr__12621 = k__6778__auto__;
if(cljs.core.truth_((pred__12620.cljs$core$IFn$_invoke$arity$2 ? pred__12620.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$test_DASH_env,expr__12621) : pred__12620.call(null,cljs.core.cst$kw$test_DASH_env,expr__12621)))){
return (new cemerick.cljs.test.TestContext(G__12616,self__.test_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12620.cljs$core$IFn$_invoke$arity$2 ? pred__12620.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$test_DASH_name,expr__12621) : pred__12620.call(null,cljs.core.cst$kw$test_DASH_name,expr__12621)))){
return (new cemerick.cljs.test.TestContext(self__.test_env,G__12616,self__.__meta,self__.__extmap,null));
} else {
return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6778__auto__,G__12616),null));
}
}
});

cemerick.cljs.test.TestContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$test_DASH_env,self__.test_env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$test_DASH_name,self__.test_name],null))], null),self__.__extmap));
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__12616){
var self__ = this;
var this__6769__auto____$1 = this;
return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,G__12616,self__.__extmap,self__.__hash));
});

cemerick.cljs.test.TestContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6776__auto__)){
return cljs.core._assoc(this__6775__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6776__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

cemerick.cljs.test.TestContext.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$test_DASH_env,cljs.core.cst$sym$test_DASH_name], null);
});

cemerick.cljs.test.TestContext.cljs$lang$type = true;

cemerick.cljs.test.TestContext.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cemerick.cljs.test/TestContext");
});

cemerick.cljs.test.TestContext.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write(writer__6805__auto__,"cemerick.cljs.test/TestContext");
});

cemerick.cljs.test.__GT_TestContext = (function cemerick$cljs$test$__GT_TestContext(test_env,test_name){
return (new cemerick.cljs.test.TestContext(test_env,test_name,null,null,null));
});

cemerick.cljs.test.map__GT_TestContext = (function cemerick$cljs$test$map__GT_TestContext(G__12618){
return (new cemerick.cljs.test.TestContext(cljs.core.cst$kw$test_DASH_env.cljs$core$IFn$_invoke$arity$1(G__12618),cljs.core.cst$kw$test_DASH_name.cljs$core$IFn$_invoke$arity$1(G__12618),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12618,cljs.core.cst$kw$test_DASH_env,cljs.core.array_seq([cljs.core.cst$kw$test_DASH_name], 0)),null));
});

cemerick.cljs.test.maybe_deref = (function cemerick$cljs$test$maybe_deref(x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
cemerick.cljs.test.testing_complete_QMARK_ = (function cemerick$cljs$test$testing_complete_QMARK_(test_env){
var map__12628 = cemerick.cljs.test.maybe_deref(test_env);
var map__12628__$1 = ((((!((map__12628 == null)))?((((map__12628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12628):map__12628);
var remaining = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12628__$1,cljs.core.cst$kw$cemerick$cljs$test_SLASH_remaining);
var running = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12628__$1,cljs.core.cst$kw$cemerick$cljs$test_SLASH_running);
var async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12628__$1,cljs.core.cst$kw$async);
var and__6144__auto__ = cljs.core.empty_QMARK_(remaining);
if(and__6144__auto__){
var and__6144__auto____$1 = cljs.core.empty_QMARK_(running);
if(and__6144__auto____$1){
var or__6156__auto__ = (async == null);
if(or__6156__auto__){
return or__6156__auto__;
} else {
return cemerick$cljs$test$testing_complete_QMARK_(async);
}
} else {
return and__6144__auto____$1;
}
} else {
return and__6144__auto__;
}
});
/**
 * Registers a watcher on the :async testing (sub)environment provided by
 * [test-env]; when its key metrics (:test, :pass, :fail, :error) change,
 * [callback] will be called with [test-env].  The watcher will be removed when all
 * tests are complete.
 * 
 * If [test-env] is already complete, [callback] will be called with it as an
 * argument immediately, and no watcher will be registered.
 */
cemerick.cljs.test.on_async_progress = (function cemerick$cljs$test$on_async_progress(test_env,callback){
if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_(test_env))){
var G__12635_12639 = (function (){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(test_env) : callback.call(null,test_env));
});
var G__12636_12640 = (1);
setTimeout(G__12635_12639,G__12636_12640);
} else {
cljs.core.add_watch(cljs.core.cst$kw$async.cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.maybe_deref(test_env)),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("on-progress"),(function (key,ref,old,new$){
var vec__12637 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12630_SHARP_){
return cljs.core.select_keys(p1__12630_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$test,cljs.core.cst$kw$pass,cljs.core.cst$kw$fail,cljs.core.cst$kw$error], null));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old,new$], null));
var oldv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12637,(0),null);
var newv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12637,(1),null);
var complete_QMARK_ = cemerick.cljs.test.testing_complete_QMARK_(new$);
if(cljs.core.truth_((function (){var or__6156__auto__ = complete_QMARK_;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,newv);
}
})())){
var G__12638_12641 = cemerick.cljs.test.maybe_deref(test_env);
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__12638_12641) : callback.call(null,G__12638_12641));
} else {
}

if(cljs.core.truth_(complete_QMARK_)){
return cljs.core.remove_watch(ref,key);
} else {
return null;
}
}));
}

return test_env;
});
goog.exportSymbol('cemerick.cljs.test.on_async_progress', cemerick.cljs.test.on_async_progress);
/**
 * Same as `on-async-progress`, but will only call [callback] when all tests are complete.
 */
cemerick.cljs.test.on_testing_complete = (function cemerick$cljs$test$on_testing_complete(test_env,callback){
return cemerick.cljs.test.on_async_progress(test_env,(function (test_env__$1){
if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_(test_env__$1))){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(test_env__$1) : callback.call(null,test_env__$1));
} else {
return null;
}
}));
});
goog.exportSymbol('cemerick.cljs.test.on_testing_complete', cemerick.cljs.test.on_testing_complete);
/**
 * Returns a string representation of the current test.  Renders names
 *   in the test environment's ::test-functions list, then the source file and line of
 *   current assertion.
 */
cemerick.cljs.test.testing_vars_str = (function cemerick$cljs$test$testing_vars_str(p__12642){
var map__12645 = p__12642;
var map__12645__$1 = ((((!((map__12645 == null)))?((((map__12645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12645):map__12645);
var m = map__12645__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12645__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12645__$1,cljs.core.cst$kw$line);
var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12645__$1,cljs.core.cst$kw$test_DASH_env);
var test_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12645__$1,cljs.core.cst$kw$test_DASH_name);
return [cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__6156__auto__ = cljs.core.seq(cljs.core.reverse(cljs.core.cst$kw$cemerick$cljs$test_SLASH_test_DASH_functions.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(test_env) : cljs.core.deref.call(null,test_env)))));
if(or__6156__auto__){
return or__6156__auto__;
} else {
return cljs.core._conj(cljs.core.List.EMPTY,test_name);
}
})()], 0))),cljs.core.str(" ("),cljs.core.str(file),cljs.core.str(":"),cljs.core.str(line),cljs.core.str(")")].join('');
});
/**
 * Returns a string representation of the current test context as represented in
 *   the [test-env]'s ::test-contexts list. Joins strings in that list with
 *   spaces.
 */
cemerick.cljs.test.testing_contexts_str = (function cemerick$cljs$test$testing_contexts_str(test_env){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.reverse(cljs.core.cst$kw$cemerick$cljs$test_SLASH_test_DASH_contexts.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(test_env) : cljs.core.deref.call(null,test_env))))));
});
/**
 * Increments the named counter in the [test-env] atom.
 */
cemerick.cljs.test.inc_report_counter = (function cemerick$cljs$test$inc_report_counter(test_env,name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
});
if(typeof cemerick.cljs.test.report !== 'undefined'){
} else {
/**
 * Generic reporting function, may be overridden to plug in
 * different report formats (e.g., TAP, JUnit).  Assertions such as
 * 'is' call 'report' to indicate results.  The argument given to
 * 'report' will be a map with a :type key.  See the documentation at
 * the top of test_is.clj for more information on the types of
 * arguments for 'report'.
 */
cemerick.cljs.test.report = (function (){var method_table__7069__auto__ = (function (){var G__12647 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12647) : cljs.core.atom.call(null,G__12647));
})();
var prefer_table__7070__auto__ = (function (){var G__12648 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12648) : cljs.core.atom.call(null,G__12648));
})();
var method_cache__7071__auto__ = (function (){var G__12649 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12649) : cljs.core.atom.call(null,G__12649));
})();
var cached_hierarchy__7072__auto__ = (function (){var G__12650 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12650) : cljs.core.atom.call(null,G__12650));
})();
var hierarchy__7073__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cemerick.cljs.test","report"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__7073__auto__,method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__));
})();
}
cemerick.cljs.test.file_and_line = (function cemerick$cljs$test$file_and_line(error){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,error.fileName,cljs.core.cst$kw$line,error.lineNumber], null);
});
/**
 * Add file and line information to a test result and call report.
 * If you are writing a custom assert-expr method, call this function
 * to pass test results to report.
 */
cemerick.cljs.test.do_report = (function cemerick$cljs$test$do_report(var_args){
var args12651 = [];
var len__7214__auto___12660 = arguments.length;
var i__7215__auto___12661 = (0);
while(true){
if((i__7215__auto___12661 < len__7214__auto___12660)){
args12651.push((arguments[i__7215__auto___12661]));

var G__12662 = (i__7215__auto___12661 + (1));
i__7215__auto___12661 = G__12662;
continue;
} else {
}
break;
}

var G__12653 = args12651.length;
switch (G__12653) {
case 2:
return cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12651.length)].join('')));

}
});

cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$2 = (function (p__12654,m){
var map__12655 = p__12654;
var map__12655__$1 = ((((!((map__12655 == null)))?((((map__12655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12655):map__12655);
var test_ctx = map__12655__$1;
var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12655__$1,cljs.core.cst$kw$test_DASH_env);
var test_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12655__$1,cljs.core.cst$kw$test_DASH_name);
if((test_ctx instanceof cemerick.cljs.test.TestContext)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$instance_QMARK_,cljs.core.cst$sym$TestContext,cljs.core.cst$sym$test_DASH_ctx)], 0)))].join('')));
}

return cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m,test_ctx], 0)));
});

cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1 = (function (m){
var G__12658 = (function (){var G__12659 = (((cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword))?cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(m).fqn:null);
switch (G__12659) {
case "fail":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.file_and_line(Error()),m], 0));

break;
case "error":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.file_and_line(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m)),m], 0));

break;
default:
return m;

}
})();
return (cemerick.cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cemerick.cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__12658) : cemerick.cljs.test.report.call(null,G__12658));
});

cemerick.cljs.test.do_report.cljs$lang$maxFixedArity = 2;
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__12665){
var map__12666 = p__12665;
var map__12666__$1 = ((((!((map__12666 == null)))?((((map__12666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12666):map__12666);
var m = map__12666__$1;
var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12666__$1,cljs.core.cst$kw$test_DASH_env);
var _STAR_print_fn_STAR_12668 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__6156__auto__ = cljs.core.cst$kw$cemerick$cljs$test_SLASH_test_DASH_print_DASH_fn.cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12668;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pass,(function (p__12669){
var map__12670 = p__12669;
var map__12670__$1 = ((((!((map__12670 == null)))?((((map__12670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12670):map__12670);
var m = map__12670__$1;
var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12670__$1,cljs.core.cst$kw$test_DASH_env);
var _STAR_print_fn_STAR_12672 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__6156__auto__ = cljs.core.cst$kw$cemerick$cljs$test_SLASH_test_DASH_print_DASH_fn.cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{return cemerick.cljs.test.inc_report_counter(test_env,cljs.core.cst$kw$pass);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12672;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fail,(function (p__12673){
var map__12674 = p__12673;
var map__12674__$1 = ((((!((map__12674 == null)))?((((map__12674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12674):map__12674);
var m = map__12674__$1;
var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12674__$1,cljs.core.cst$kw$test_DASH_env);
var _STAR_print_fn_STAR_12676 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__6156__auto__ = cljs.core.cst$kw$cemerick$cljs$test_SLASH_test_DASH_print_DASH_fn.cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{cemerick.cljs.test.inc_report_counter(test_env,cljs.core.cst$kw$fail);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nFAIL in",cemerick.cljs.test.testing_vars_str(m)], 0));

if(cljs.core.seq(cljs.core.cst$kw$cemerick$cljs$test_SLASH_test_DASH_contexts.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(test_env) : cljs.core.deref.call(null,test_env))))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.testing_contexts_str(test_env)], 0));
} else {
}

var temp__4657__auto___12677 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto___12677)){
var message_12678 = temp__4657__auto___12677;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message_12678], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["expected:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$expected.cljs$core$IFn$_invoke$arity$1(m)], 0))], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  actual:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m)], 0))], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12676;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$error,(function (p__12679){
var map__12680 = p__12679;
var map__12680__$1 = ((((!((map__12680 == null)))?((((map__12680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12680):map__12680);
var m = map__12680__$1;
var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12680__$1,cljs.core.cst$kw$test_DASH_env);
var _STAR_print_fn_STAR_12682 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__6156__auto__ = cljs.core.cst$kw$cemerick$cljs$test_SLASH_test_DASH_print_DASH_fn.cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{cemerick.cljs.test.inc_report_counter(test_env,cljs.core.cst$kw$error);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nERROR in",cemerick.cljs.test.testing_vars_str(m)], 0));

if(cljs.core.seq(cljs.core.cst$kw$cemerick$cljs$test_SLASH_test_DASH_contexts.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(test_env) : cljs.core.deref.call(null,test_env))))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.testing_contexts_str(test_env)], 0));
} else {
}

var temp__4657__auto___12683 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto___12683)){
var message_12684 = temp__4657__auto___12683;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message_12684], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["expected:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$expected.cljs$core$IFn$_invoke$arity$1(m)], 0))], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  actual: "], 0));

var actual = cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m);
if((actual instanceof Error)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([actual.stack], 0));
} else {
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([actual], 0));
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12682;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$multiple_DASH_async_DASH_done,(function (p__12685){
var map__12686 = p__12685;
var map__12686__$1 = ((((!((map__12686 == null)))?((((map__12686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12686):map__12686);
var m = map__12686__$1;
var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12686__$1,cljs.core.cst$kw$test_DASH_env);
var _STAR_print_fn_STAR_12688 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__6156__auto__ = cljs.core.cst$kw$cemerick$cljs$test_SLASH_test_DASH_print_DASH_fn.cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{cemerick.cljs.test.inc_report_counter(test_env,cljs.core.cst$kw$multiple_DASH_async_DASH_done);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nWARNING in",cemerick.cljs.test.testing_vars_str(m)], 0));

if(cljs.core.seq(cljs.core.cst$kw$cemerick$cljs$test_SLASH_test_DASH_contexts.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(test_env) : cljs.core.deref.call(null,test_env))))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.testing_contexts_str(test_env)], 0));
} else {
}

var temp__4657__auto__ = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var message = temp__4657__auto__;
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message], 0));
} else {
return null;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12688;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$summary,(function (p__12689){
var map__12690 = p__12689;
var map__12690__$1 = ((((!((map__12690 == null)))?((((map__12690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12690):map__12690);
var test_env = map__12690__$1;
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12690__$1,cljs.core.cst$kw$test);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12690__$1,cljs.core.cst$kw$pass);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12690__$1,cljs.core.cst$kw$fail);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12690__$1,cljs.core.cst$kw$error);
var async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12690__$1,cljs.core.cst$kw$async);
var _STAR_print_fn_STAR_12692 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__6156__auto__ = cljs.core.cst$kw$cemerick$cljs$test_SLASH_test_DASH_print_DASH_fn.cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{var pending_count = (function (){var and__6144__auto__ = cljs.core.not(cemerick.cljs.test.testing_complete_QMARK_(test_env));
if(and__6144__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cemerick$cljs$test_SLASH_remaining,cljs.core.cst$kw$cemerick$cljs$test_SLASH_running).call(null,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(async) : cljs.core.deref.call(null,async)))));
} else {
return and__6144__auto__;
}
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nRan",test,(cljs.core.truth_(pending_count)?"synchronous":""),"tests containing",((pass + fail) + error),"assertions."], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Testing complete:",fail,"failures,",error,"errors."], 0));

if(cljs.core.truth_(pending_count)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Waiting on",pending_count,[cljs.core.str("asynchronous test"),cljs.core.str((((pending_count > (1)))?"s":null)),cljs.core.str(" to complete.")].join('')], 0));
} else {
return null;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12692;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$begin_DASH_test_DASH_ns,(function (p__12693){
var map__12694 = p__12693;
var map__12694__$1 = ((((!((map__12694 == null)))?((((map__12694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12694):map__12694);
var m = map__12694__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12694__$1,cljs.core.cst$kw$ns);
var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12694__$1,cljs.core.cst$kw$test_DASH_env);
var async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12694__$1,cljs.core.cst$kw$async);
var _STAR_print_fn_STAR_12696 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__6156__auto__ = cljs.core.cst$kw$cemerick$cljs$test_SLASH_test_DASH_print_DASH_fn.cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nTesting",ns,(cljs.core.truth_(async)?"(async)":"")], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12696;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_test_DASH_ns,(function (p__12697){
var map__12698 = p__12697;
var map__12698__$1 = ((((!((map__12698 == null)))?((((map__12698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12698):map__12698);
var m = map__12698__$1;
var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12698__$1,cljs.core.cst$kw$test_DASH_env);
return null;
}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$begin_DASH_test_DASH_var,(function (p__12700){
var map__12701 = p__12700;
var map__12701__$1 = ((((!((map__12701 == null)))?((((map__12701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12701):map__12701);
var m = map__12701__$1;
var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12701__$1,cljs.core.cst$kw$test_DASH_env);
return null;
}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_test_DASH_var,(function (p__12703){
var map__12704 = p__12703;
var map__12704__$1 = ((((!((map__12704 == null)))?((((map__12704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12704):map__12704);
var m = map__12704__$1;
var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12704__$1,cljs.core.cst$kw$test_DASH_env);
return null;
}));
/**
 * Wrap test runs in a fixture function to perform setup and
 *   teardown. Using a fixture-type of :each wraps every test
 *   individually, while :once wraps the whole run in a single function.
 */
cemerick.cljs.test.register_fixtures_BANG_ = (function cemerick$cljs$test$register_fixtures_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12709 = arguments.length;
var i__7215__auto___12710 = (0);
while(true){
if((i__7215__auto___12710 < len__7214__auto___12709)){
args__7221__auto__.push((arguments[i__7215__auto___12710]));

var G__12711 = (i__7215__auto___12710 + (1));
i__7215__auto___12710 = G__12711;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((2) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((2)),(0))):null);
return cemerick.cljs.test.register_fixtures_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7222__auto__);
});

cemerick.cljs.test.register_fixtures_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ns_sym,fixture_type,fixture_fns){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cemerick.cljs.test.registered_fixtures,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_sym,fixture_type], null),cljs.core.constantly(fixture_fns));
});

cemerick.cljs.test.register_fixtures_BANG_.cljs$lang$maxFixedArity = (2);

cemerick.cljs.test.register_fixtures_BANG_.cljs$lang$applyTo = (function (seq12706){
var G__12707 = cljs.core.first(seq12706);
var seq12706__$1 = cljs.core.next(seq12706);
var G__12708 = cljs.core.first(seq12706__$1);
var seq12706__$2 = cljs.core.next(seq12706__$1);
return cemerick.cljs.test.register_fixtures_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12707,G__12708,seq12706__$2);
});
/**
 * The default, empty, fixture function.  Just calls its argument.
 */
cemerick.cljs.test.default_fixture = (function cemerick$cljs$test$default_fixture(f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
/**
 * Composes two fixture functions, creating a new fixture function
 *   that combines their behavior.
 */
cemerick.cljs.test.compose_fixtures = (function cemerick$cljs$test$compose_fixtures(f1,f2){
return (function (g){
var G__12713 = (function (){
return (f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(g) : f2.call(null,g));
});
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12713) : f1.call(null,G__12713));
});
});
/**
 * Composes a collection of fixtures, in order.  Always returns a valid
 *   fixture function, even if the collection is empty.
 */
cemerick.cljs.test.join_fixtures = (function cemerick$cljs$test$join_fixtures(fixtures){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cemerick.cljs.test.compose_fixtures,cemerick.cljs.test.default_fixture,fixtures);
});
cemerick.cljs.test.async_test_QMARK_ = (function cemerick$cljs$test$async_test_QMARK_(test_fn){
return cljs.core.boolean$(cljs.core.cst$kw$async.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(test_fn)));
});
cemerick.cljs.test.test_async_fn = (function cemerick$cljs$test$test_async_fn(async_test_env,test_name,test_fn){
cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$begin_DASH_test_DASH_var,cljs.core.cst$kw$var,test_fn,cljs.core.cst$kw$test_DASH_env,async_test_env,cljs.core.cst$kw$test_DASH_name,test_name], null));

cemerick.cljs.test.inc_report_counter(async_test_env,cljs.core.cst$kw$test);

var G__12715 = (new cemerick.cljs.test.TestContext(async_test_env,test_name,null,null,null));
return (test_fn.cljs$core$IFn$_invoke$arity$1 ? test_fn.cljs$core$IFn$_invoke$arity$1(G__12715) : test_fn.call(null,G__12715));
});
cemerick.cljs.test.start_next_async_test = (function cemerick$cljs$test$start_next_async_test(async_test_env){
var next_test = (function (){var G__12720 = (function (){
return null;
});
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12720) : cljs.core.atom.call(null,G__12720));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(async_test_env,((function (next_test){
return (function (env){
var temp__4655__auto__ = (function (){var and__6144__auto__ = cljs.core.not(cljs.core.cst$kw$stop.cljs$core$IFn$_invoke$arity$1(env));
if(and__6144__auto__){
return cljs.core.first(cljs.core.cst$kw$cemerick$cljs$test_SLASH_remaining.cljs$core$IFn$_invoke$arity$1(env));
} else {
return and__6144__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var vec__12721 = temp__4655__auto__;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12721,(0),null);
var testfn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12721,(1),null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(next_test,testfn) : cljs.core.reset_BANG_.call(null,next_test,testfn));

var ns_12724 = cljs.core.namespace(name);
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(async_test_env)),ns_12724)){
} else {
cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$begin_DASH_test_DASH_ns,cljs.core.cst$kw$ns,ns_12724,cljs.core.cst$kw$test_DASH_env,async_test_env,cljs.core.cst$kw$async,true], null));

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(async_test_env,cljs.core.update_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),ns_12724], 0));
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cemerick$cljs$test_SLASH_remaining], null),cljs.core.dissoc,name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cemerick$cljs$test_SLASH_running], null),cljs.core.assoc,name,(new Date()));
} else {
return env;
}
});})(next_test))
);

var G__12722_12725 = ((function (next_test){
return (function (){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(next_test) : cljs.core.deref.call(null,next_test)).call(null);
});})(next_test))
;
var G__12723_12726 = (1);
setTimeout(G__12722_12725,G__12723_12726);

return async_test_env;
});
/**
 * Removes framework-internal bits from a test environment for more pleasant human viewing.
 */
cemerick.cljs.test.squelch_internals = (function cemerick$cljs$test$squelch_internals(test_env){
var G__12731 = test_env;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__12731,((function (G__12731){
return (function (p1__12727_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__12731){
return (function (env,p__12732){
var vec__12733 = p__12732;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12733,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12733,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(k),cljs.core.namespace(cljs.core.cst$kw$cemerick$cljs$test_SLASH_foo))){
return env;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,k,v);
}
});})(G__12731))
,cljs.core.PersistentArrayMap.EMPTY,p1__12727_SHARP_);
});})(G__12731))
);

return G__12731;
});
cemerick.cljs.test.finish_test_entry_point = (function cemerick$cljs$test$finish_test_entry_point(entry_point_QMARK_,test_env){
if(cljs.core.truth_(entry_point_QMARK_)){
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$cemerick$cljs$test_SLASH_remaining.cljs$core$IFn$_invoke$arity$1((function (){var G__12736 = cljs.core.cst$kw$async.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(test_env) : cljs.core.deref.call(null,test_env)));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12736) : cljs.core.deref.call(null,G__12736));
})()))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(test_env,cljs.core.dissoc,cljs.core.cst$kw$async);
} else {
cemerick.cljs.test.start_next_async_test(cljs.core.cst$kw$async.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(test_env) : cljs.core.deref.call(null,test_env))));
}

var G__12737 = cemerick.cljs.test.squelch_internals(test_env);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12737) : cljs.core.deref.call(null,G__12737));
} else {
return test_env;
}
});
cemerick.cljs.test.schedule_async_test = (function cemerick$cljs$test$schedule_async_test(async_test_env,test_name,test_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(async_test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cemerick$cljs$test_SLASH_remaining], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.sorted_map()),cljs.core.array_seq([test_name,cljs.core.with_meta((function (){
return cemerick.cljs.test.test_async_fn(async_test_env,test_name,test_fn);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,test_name], null))], 0));

return async_test_env;
});
cemerick.cljs.test.done_STAR_ = (function cemerick$cljs$test$done_STAR_(var_args){
var args12738 = [];
var len__7214__auto___12749 = arguments.length;
var i__7215__auto___12750 = (0);
while(true){
if((i__7215__auto___12750 < len__7214__auto___12749)){
args12738.push((arguments[i__7215__auto___12750]));

var G__12751 = (i__7215__auto___12750 + (1));
i__7215__auto___12750 = G__12751;
continue;
} else {
}
break;
}

var G__12740 = args12738.length;
switch (G__12740) {
case 2:
return cemerick.cljs.test.done_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cemerick.cljs.test.done_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12738.length)].join('')));

}
});

cemerick.cljs.test.done_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p__12741,error){
var map__12742 = p__12741;
var map__12742__$1 = ((((!((map__12742 == null)))?((((map__12742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12742):map__12742);
var test_ctx = map__12742__$1;
var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12742__$1,cljs.core.cst$kw$test_DASH_env);
var test_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12742__$1,cljs.core.cst$kw$test_DASH_name);
if((test_ctx instanceof cemerick.cljs.test.TestContext)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$instance_QMARK_,cljs.core.cst$sym$TestContext,cljs.core.cst$sym$test_DASH_ctx)], 0)))].join('')));
}

cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,"Uncaught exception, not in assertion.",cljs.core.cst$kw$expected,null,cljs.core.cst$kw$actual,error], null),test_ctx], 0))));

return cemerick.cljs.test.done_STAR_.cljs$core$IFn$_invoke$arity$1(test_ctx);
});

cemerick.cljs.test.done_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p__12744){
var map__12745 = p__12744;
var map__12745__$1 = ((((!((map__12745 == null)))?((((map__12745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12745):map__12745);
var test_ctx = map__12745__$1;
var async_test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12745__$1,cljs.core.cst$kw$test_DASH_env);
var test_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12745__$1,cljs.core.cst$kw$test_DASH_name);
if((test_ctx instanceof cemerick.cljs.test.TestContext)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$instance_QMARK_,cljs.core.cst$sym$TestContext,cljs.core.cst$sym$test_DASH_ctx)], 0)))].join('')));
}

var first_call_QMARK_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(async_test_env,((function (first_call_QMARK_,map__12745,map__12745__$1,test_ctx,async_test_env,test_name){
return (function (env){
var G__12747_12753 = first_call_QMARK_;
var G__12748_12754 = cljs.core.contains_QMARK_(cljs.core.cst$kw$cemerick$cljs$test_SLASH_running.cljs$core$IFn$_invoke$arity$1(env),test_name);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12747_12753,G__12748_12754) : cljs.core.reset_BANG_.call(null,G__12747_12753,G__12748_12754));

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cemerick$cljs$test_SLASH_running], null),cljs.core.dissoc,test_name);
});})(first_call_QMARK_,map__12745,map__12745__$1,test_ctx,async_test_env,test_name))
);

if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(first_call_QMARK_) : cljs.core.deref.call(null,first_call_QMARK_)))){
cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_test_DASH_var,cljs.core.cst$kw$var,test_name], null),test_ctx], 0)));

if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_(async_test_env))){
cemerick.cljs.test.squelch_internals(async_test_env);
} else {
cemerick.cljs.test.start_next_async_test(async_test_env);
}
} else {
cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$multiple_DASH_async_DASH_done,cljs.core.cst$kw$message,"`(done)` called multiple times to signal end-of-test"], null),test_ctx], 0)));
}

return async_test_env;
});

cemerick.cljs.test.done_STAR_.cljs$lang$maxFixedArity = 2;
cemerick.cljs.test.stop = (function cemerick$cljs$test$stop(async_test_env){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(async_test_env,cljs.core.assoc,cljs.core.cst$kw$stop,true);
});
/**
 * If v has a function in its :test metadata, calls that function,
 *   conjing its name into the test environment's ::test-functions list.
 * 
 *   Note that this is the implementation of `test-var` in clojure.test,
 *   which is a macro in clojurescript.test.  See `cemerick.cljs.test/test-var`
 *   in the Clojure file for `test-var`.
 */
cemerick.cljs.test.test_function = (function cemerick$cljs$test$test_function(var_args){
var args12755 = [];
var len__7214__auto___12763 = arguments.length;
var i__7215__auto___12764 = (0);
while(true){
if((i__7215__auto___12764 < len__7214__auto___12763)){
args12755.push((arguments[i__7215__auto___12764]));

var G__12765 = (i__7215__auto___12764 + (1));
i__7215__auto___12764 = G__12765;
continue;
} else {
}
break;
}

var G__12757 = args12755.length;
switch (G__12757) {
case 1:
return cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12755.length)].join('')));

}
});

cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1 = (function (v){
return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(cemerick.cljs.test.init_test_environment(),v) : cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment(),v));
});

cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 = (function (test_env,v){
var entry_point_QMARK___12585__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;
var _STAR_entry_point_STAR_12758 = cemerick.cljs.test._STAR_entry_point_STAR_;
cemerick.cljs.test._STAR_entry_point_STAR_ = false;

try{if(cljs.core.fn_QMARK_(v)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("test-var must be passed the function to be tested (not a symbol naming it)"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$v)], 0)))].join('')));
}

var map__12759_12767 = cljs.core.meta(v);
var map__12759_12768__$1 = ((((!((map__12759_12767 == null)))?((((map__12759_12767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12759_12767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12759_12767):map__12759_12767);
var t_12769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12759_12768__$1,cljs.core.cst$kw$test);
var test_name_12770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12759_12768__$1,cljs.core.cst$kw$name);
var async_QMARK__12771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12759_12768__$1,cljs.core.cst$kw$async);
if(cljs.core.truth_(t_12769)){
if(cljs.core.truth_(async_QMARK__12771)){
cemerick.cljs.test.schedule_async_test(cljs.core.cst$kw$async.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(test_env) : cljs.core.deref.call(null,test_env))),test_name_12770,t_12769);
} else {
try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cemerick$cljs$test_SLASH_test_DASH_functions], null),cljs.core.conj,cljs.core.array_seq([(function (){var or__6156__auto__ = test_name_12770;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return v;
}
})()], 0));

cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$begin_DASH_test_DASH_var,cljs.core.cst$kw$var,v,cljs.core.cst$kw$test_DASH_env,test_env,cljs.core.cst$kw$test_DASH_name,test_name_12770], null));

cemerick.cljs.test.inc_report_counter(test_env,cljs.core.cst$kw$test);

try{var G__12762_12772 = (new cemerick.cljs.test.TestContext(test_env,test_name_12770,null,null,null));
(t_12769.cljs$core$IFn$_invoke$arity$1 ? t_12769.cljs$core$IFn$_invoke$arity$1(G__12762_12772) : t_12769.call(null,G__12762_12772));
}catch (e12761){if((e12761 instanceof Error)){
var e_12773 = e12761;
cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,"Uncaught exception, not in assertion.",cljs.core.cst$kw$test_DASH_env,test_env,cljs.core.cst$kw$test_DASH_name,test_name_12770,cljs.core.cst$kw$expected,null,cljs.core.cst$kw$actual,e_12773], null));
} else {
throw e12761;

}
}
cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_test_DASH_var,cljs.core.cst$kw$var,v,cljs.core.cst$kw$test_DASH_env,test_env,cljs.core.cst$kw$test_DASH_name,test_name_12770], null));
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cemerick$cljs$test_SLASH_test_DASH_functions], null),cljs.core.pop);
}}
} else {
}

return cemerick.cljs.test.finish_test_entry_point(entry_point_QMARK___12585__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_12758;
}});

cemerick.cljs.test.test_function.cljs$lang$maxFixedArity = 2;
/**
 * Calls test-var on every var interned in the namespace, with fixtures.
 */
cemerick.cljs.test.test_all_vars = (function cemerick$cljs$test$test_all_vars(var_args){
var args12777 = [];
var len__7214__auto___12796 = arguments.length;
var i__7215__auto___12797 = (0);
while(true){
if((i__7215__auto___12797 < len__7214__auto___12796)){
args12777.push((arguments[i__7215__auto___12797]));

var G__12798 = (i__7215__auto___12797 + (1));
i__7215__auto___12797 = G__12798;
continue;
} else {
}
break;
}

var G__12779 = args12777.length;
switch (G__12779) {
case 1:
return cemerick.cljs.test.test_all_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cemerick.cljs.test.test_all_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12777.length)].join('')));

}
});

cemerick.cljs.test.test_all_vars.cljs$core$IFn$_invoke$arity$1 = (function (ns_sym){
return cemerick.cljs.test.test_all_vars.cljs$core$IFn$_invoke$arity$2(cemerick.cljs.test.init_test_environment(),ns_sym);
});

cemerick.cljs.test.test_all_vars.cljs$core$IFn$_invoke$arity$2 = (function (test_env,ns_sym){
var entry_point_QMARK___12585__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;
var _STAR_entry_point_STAR_12780 = cemerick.cljs.test._STAR_entry_point_STAR_;
cemerick.cljs.test._STAR_entry_point_STAR_ = false;

try{var tests_12800 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (_STAR_entry_point_STAR_12780,entry_point_QMARK___12585__auto__){
return (function (p1__12774_SHARP_){
return cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__12774_SHARP_));
});})(_STAR_entry_point_STAR_12780,entry_point_QMARK___12585__auto__))
,cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.registered_tests) : cljs.core.deref.call(null,cemerick.cljs.test.registered_tests)),ns_sym)));
var once_fixture_fn_12801 = cemerick.cljs.test.join_fixtures(cljs.core.cst$kw$once.cljs$core$IFn$_invoke$arity$1((function (){var G__12781 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.registered_fixtures) : cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures));
return (ns_sym.cljs$core$IFn$_invoke$arity$1 ? ns_sym.cljs$core$IFn$_invoke$arity$1(G__12781) : ns_sym.call(null,G__12781));
})()));
var each_fixture_fn_12802 = cemerick.cljs.test.join_fixtures(cljs.core.cst$kw$each.cljs$core$IFn$_invoke$arity$1((function (){var G__12782 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.registered_fixtures) : cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures));
return (ns_sym.cljs$core$IFn$_invoke$arity$1 ? ns_sym.cljs$core$IFn$_invoke$arity$1(G__12782) : ns_sym.call(null,G__12782));
})()));
var G__12789_12803 = ((function (once_fixture_fn_12801,each_fixture_fn_12802,tests_12800,_STAR_entry_point_STAR_12780,entry_point_QMARK___12585__auto__){
return (function (){
var seq__12790 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cemerick.cljs.test.async_test_QMARK_,tests_12800));
var chunk__12791 = null;
var count__12792 = (0);
var i__12793 = (0);
while(true){
if((i__12793 < count__12792)){
var v = chunk__12791.cljs$core$IIndexed$_nth$arity$2(null,i__12793);
var G__12794_12804 = ((function (seq__12790,chunk__12791,count__12792,i__12793,v,once_fixture_fn_12801,each_fixture_fn_12802,tests_12800,_STAR_entry_point_STAR_12780,entry_point_QMARK___12585__auto__){
return (function (){
return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(test_env,v) : cemerick.cljs.test.test_function.call(null,test_env,v));
});})(seq__12790,chunk__12791,count__12792,i__12793,v,once_fixture_fn_12801,each_fixture_fn_12802,tests_12800,_STAR_entry_point_STAR_12780,entry_point_QMARK___12585__auto__))
;
(each_fixture_fn_12802.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn_12802.cljs$core$IFn$_invoke$arity$1(G__12794_12804) : each_fixture_fn_12802.call(null,G__12794_12804));

var G__12805 = seq__12790;
var G__12806 = chunk__12791;
var G__12807 = count__12792;
var G__12808 = (i__12793 + (1));
seq__12790 = G__12805;
chunk__12791 = G__12806;
count__12792 = G__12807;
i__12793 = G__12808;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__12790);
if(temp__4657__auto__){
var seq__12790__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12790__$1)){
var c__6959__auto__ = cljs.core.chunk_first(seq__12790__$1);
var G__12809 = cljs.core.chunk_rest(seq__12790__$1);
var G__12810 = c__6959__auto__;
var G__12811 = cljs.core.count(c__6959__auto__);
var G__12812 = (0);
seq__12790 = G__12809;
chunk__12791 = G__12810;
count__12792 = G__12811;
i__12793 = G__12812;
continue;
} else {
var v = cljs.core.first(seq__12790__$1);
var G__12795_12813 = ((function (seq__12790,chunk__12791,count__12792,i__12793,v,seq__12790__$1,temp__4657__auto__,once_fixture_fn_12801,each_fixture_fn_12802,tests_12800,_STAR_entry_point_STAR_12780,entry_point_QMARK___12585__auto__){
return (function (){
return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(test_env,v) : cemerick.cljs.test.test_function.call(null,test_env,v));
});})(seq__12790,chunk__12791,count__12792,i__12793,v,seq__12790__$1,temp__4657__auto__,once_fixture_fn_12801,each_fixture_fn_12802,tests_12800,_STAR_entry_point_STAR_12780,entry_point_QMARK___12585__auto__))
;
(each_fixture_fn_12802.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn_12802.cljs$core$IFn$_invoke$arity$1(G__12795_12813) : each_fixture_fn_12802.call(null,G__12795_12813));

var G__12814 = cljs.core.next(seq__12790__$1);
var G__12815 = null;
var G__12816 = (0);
var G__12817 = (0);
seq__12790 = G__12814;
chunk__12791 = G__12815;
count__12792 = G__12816;
i__12793 = G__12817;
continue;
}
} else {
return null;
}
}
break;
}
});})(once_fixture_fn_12801,each_fixture_fn_12802,tests_12800,_STAR_entry_point_STAR_12780,entry_point_QMARK___12585__auto__))
;
(once_fixture_fn_12801.cljs$core$IFn$_invoke$arity$1 ? once_fixture_fn_12801.cljs$core$IFn$_invoke$arity$1(G__12789_12803) : once_fixture_fn_12801.call(null,G__12789_12803));

cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tests_12800,_STAR_entry_point_STAR_12780,entry_point_QMARK___12585__auto__){
return (function (p1__12775_SHARP_,p2__12776_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cemerick.cljs.test.schedule_async_test,p1__12775_SHARP_,p2__12776_SHARP_);
});})(tests_12800,_STAR_entry_point_STAR_12780,entry_point_QMARK___12585__auto__))
,cljs.core.cst$kw$async.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(test_env) : cljs.core.deref.call(null,test_env))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,cljs.core.cst$kw$test),cljs.core.meta),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cemerick.cljs.test.async_test_QMARK_,tests_12800)));

return cemerick.cljs.test.finish_test_entry_point(entry_point_QMARK___12585__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_12780;
}});

cemerick.cljs.test.test_all_vars.cljs$lang$maxFixedArity = 2;
/**
 * If the namespace defines a function named test-ns-hook, calls that.
 *   Otherwise, calls test-all-vars on the namespace.  'ns' is a
 *   namespace object or a symbol.
 * 
 *   Internally binds *report-counters* to an atom initialized to
 *   *inital-report-counters*.  Returns the final, dereferenced state of
 *   *report-counters*.
 */
cemerick.cljs.test.test_ns = (function cemerick$cljs$test$test_ns(var_args){
var args12818 = [];
var len__7214__auto___12822 = arguments.length;
var i__7215__auto___12823 = (0);
while(true){
if((i__7215__auto___12823 < len__7214__auto___12822)){
args12818.push((arguments[i__7215__auto___12823]));

var G__12824 = (i__7215__auto___12823 + (1));
i__7215__auto___12823 = G__12824;
continue;
} else {
}
break;
}

var G__12820 = args12818.length;
switch (G__12820) {
case 1:
return cemerick.cljs.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cemerick.cljs.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12818.length)].join('')));

}
});

cemerick.cljs.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns_sym){
return cemerick.cljs.test.test_ns.cljs$core$IFn$_invoke$arity$2(cemerick.cljs.test.init_test_environment(),ns_sym);
});

cemerick.cljs.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (test_env,ns_sym){
var entry_point_QMARK___12585__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;
var _STAR_entry_point_STAR_12821 = cemerick.cljs.test._STAR_entry_point_STAR_;
cemerick.cljs.test._STAR_entry_point_STAR_ = false;

try{cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$begin_DASH_test_DASH_ns,cljs.core.cst$kw$ns,ns_sym,cljs.core.cst$kw$test_DASH_env,test_env], null));

var temp__4655__auto___12826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.registered_test_hooks) : cljs.core.deref.call(null,cemerick.cljs.test.registered_test_hooks)),ns_sym);
if(cljs.core.truth_(temp__4655__auto___12826)){
var test_hook_12827 = temp__4655__auto___12826;
(test_hook_12827.cljs$core$IFn$_invoke$arity$1 ? test_hook_12827.cljs$core$IFn$_invoke$arity$1(test_env) : test_hook_12827.call(null,test_env));
} else {
cemerick.cljs.test.test_all_vars.cljs$core$IFn$_invoke$arity$2(test_env,ns_sym);
}

cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_test_DASH_ns,cljs.core.cst$kw$ns,ns_sym,cljs.core.cst$kw$test_DASH_env,test_env], null));

return cemerick.cljs.test.finish_test_entry_point(entry_point_QMARK___12585__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_12821;
}});

cemerick.cljs.test.test_ns.cljs$lang$maxFixedArity = 2;
cemerick.cljs.test.print_summary = (function cemerick$cljs$test$print_summary(env){
return cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$type,cljs.core.cst$kw$summary));
});
cemerick.cljs.test.async_test_summary = (function cemerick$cljs$test$async_test_summary(test_env){
var async_test_env = cemerick.cljs.test.maybe_deref(cljs.core.cst$kw$async.cljs$core$IFn$_invoke$arity$1(test_env));
var tests = cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(async_test_env);
if((tests > (0))){
return cemerick.cljs.test.print_summary(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.array_seq([test_env,async_test_env], 0)));
} else {
return null;
}
});
cemerick.cljs.test.test_summary = (function cemerick$cljs$test$test_summary(test_env){
var test_env__$1 = cemerick.cljs.test.maybe_deref(test_env);
cemerick.cljs.test.print_summary(test_env__$1);

return cemerick.cljs.test.on_testing_complete(test_env__$1,cemerick.cljs.test.async_test_summary);
});
/**
 * Runs all tests in the given namespaces; prints results.
 *   Defaults to current namespace if none given.  Returns a map
 *   summarizing test results.
 */
cemerick.cljs.test.run_tests_STAR_ = (function cemerick$cljs$test$run_tests_STAR_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12835 = arguments.length;
var i__7215__auto___12836 = (0);
while(true){
if((i__7215__auto___12836 < len__7214__auto___12835)){
args__7221__auto__.push((arguments[i__7215__auto___12836]));

var G__12837 = (i__7215__auto___12836 + (1));
i__7215__auto___12836 = G__12837;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return cemerick.cljs.test.run_tests_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});
goog.exportSymbol('cemerick.cljs.test.run_tests_STAR_', cemerick.cljs.test.run_tests_STAR_);

cemerick.cljs.test.run_tests_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (namespaces){
var vec__12829 = (((cljs.core.first(namespaces) instanceof cljs.core.Atom))?namespaces:cljs.core.cons(cemerick.cljs.test.init_test_environment(),namespaces));
var test_env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12829,(0),null);
var namespaces__$1 = cljs.core.nthnext(vec__12829,(1));
var entry_point_QMARK___12585__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;
var _STAR_entry_point_STAR_12830 = cemerick.cljs.test._STAR_entry_point_STAR_;
cemerick.cljs.test._STAR_entry_point_STAR_ = false;

try{var seq__12831_12838 = cljs.core.seq(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(namespaces__$1));
var chunk__12832_12839 = null;
var count__12833_12840 = (0);
var i__12834_12841 = (0);
while(true){
if((i__12834_12841 < count__12833_12840)){
var ns_12842 = chunk__12832_12839.cljs$core$IIndexed$_nth$arity$2(null,i__12834_12841);
cemerick.cljs.test.test_ns.cljs$core$IFn$_invoke$arity$2(test_env,ns_12842);

var G__12843 = seq__12831_12838;
var G__12844 = chunk__12832_12839;
var G__12845 = count__12833_12840;
var G__12846 = (i__12834_12841 + (1));
seq__12831_12838 = G__12843;
chunk__12832_12839 = G__12844;
count__12833_12840 = G__12845;
i__12834_12841 = G__12846;
continue;
} else {
var temp__4657__auto___12847 = cljs.core.seq(seq__12831_12838);
if(temp__4657__auto___12847){
var seq__12831_12848__$1 = temp__4657__auto___12847;
if(cljs.core.chunked_seq_QMARK_(seq__12831_12848__$1)){
var c__6959__auto___12849 = cljs.core.chunk_first(seq__12831_12848__$1);
var G__12850 = cljs.core.chunk_rest(seq__12831_12848__$1);
var G__12851 = c__6959__auto___12849;
var G__12852 = cljs.core.count(c__6959__auto___12849);
var G__12853 = (0);
seq__12831_12838 = G__12850;
chunk__12832_12839 = G__12851;
count__12833_12840 = G__12852;
i__12834_12841 = G__12853;
continue;
} else {
var ns_12854 = cljs.core.first(seq__12831_12848__$1);
cemerick.cljs.test.test_ns.cljs$core$IFn$_invoke$arity$2(test_env,ns_12854);

var G__12855 = cljs.core.next(seq__12831_12848__$1);
var G__12856 = null;
var G__12857 = (0);
var G__12858 = (0);
seq__12831_12838 = G__12855;
chunk__12832_12839 = G__12856;
count__12833_12840 = G__12857;
i__12834_12841 = G__12858;
continue;
}
} else {
}
}
break;
}

cemerick.cljs.test.test_summary(test_env);

return cemerick.cljs.test.finish_test_entry_point(entry_point_QMARK___12585__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_12830;
}});

cemerick.cljs.test.run_tests_STAR_.cljs$lang$maxFixedArity = (0);

cemerick.cljs.test.run_tests_STAR_.cljs$lang$applyTo = (function (seq12828){
return cemerick.cljs.test.run_tests_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12828));
});
/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
cemerick.cljs.test.run_all_tests = (function cemerick$cljs$test$run_all_tests(var_args){
var args12860 = [];
var len__7214__auto___12863 = arguments.length;
var i__7215__auto___12864 = (0);
while(true){
if((i__7215__auto___12864 < len__7214__auto___12863)){
args12860.push((arguments[i__7215__auto___12864]));

var G__12865 = (i__7215__auto___12864 + (1));
i__7215__auto___12864 = G__12865;
continue;
} else {
}
break;
}

var G__12862 = args12860.length;
switch (G__12862) {
case 0:
return cemerick.cljs.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cemerick.cljs.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12860.length)].join('')));

}
});
goog.exportSymbol('cemerick.cljs.test.run_all_tests', cemerick.cljs.test.run_all_tests);

cemerick.cljs.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cemerick.cljs.test.run_tests_STAR_,cljs.core.keys((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.registered_tests) : cljs.core.deref.call(null,cemerick.cljs.test.registered_tests))));
});

cemerick.cljs.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (re){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cemerick.cljs.test.run_tests_STAR_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12859_SHARP_){
return cljs.core.re_matches(re,cljs.core.name(p1__12859_SHARP_));
}),cljs.core.keys((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.registered_tests) : cljs.core.deref.call(null,cemerick.cljs.test.registered_tests)))));
});

cemerick.cljs.test.run_all_tests.cljs$lang$maxFixedArity = 1;
/**
 * Returns true if the given test summary indicates all tests
 *   were successful, false otherwise.
 */
cemerick.cljs.test.successful_QMARK_ = (function cemerick$cljs$test$successful_QMARK_(test_env){
var map__12869 = cemerick.cljs.test.maybe_deref(test_env);
var map__12869__$1 = ((((!((map__12869 == null)))?((((map__12869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12869):map__12869);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12869__$1,cljs.core.cst$kw$fail);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12869__$1,cljs.core.cst$kw$error);
var async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12869__$1,cljs.core.cst$kw$async);
var and__6144__auto__ = cemerick.cljs.test.testing_complete_QMARK_(test_env);
if(cljs.core.truth_(and__6144__auto__)){
var and__6144__auto____$1 = ((function (){var or__6156__auto__ = fail;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})() === (0));
if(and__6144__auto____$1){
var and__6144__auto____$2 = ((function (){var or__6156__auto__ = error;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})() === (0));
if(and__6144__auto____$2){
var or__6156__auto__ = (async == null);
if(or__6156__auto__){
return or__6156__auto__;
} else {
return cemerick$cljs$test$successful_QMARK_(async);
}
} else {
return and__6144__auto____$2;
}
} else {
return and__6144__auto____$1;
}
} else {
return and__6144__auto__;
}
});
goog.exportSymbol('cemerick.cljs.test.successful_QMARK_', cemerick.cljs.test.successful_QMARK_);
cemerick.cljs.test.set_print_fn_BANG_ = (function cemerick$cljs$test$set_print_fn_BANG_(f){
return cljs.core._STAR_print_fn_STAR_ = f;
});
goog.exportSymbol('cemerick.cljs.test.set_print_fn_BANG_', cemerick.cljs.test.set_print_fn_BANG_);
