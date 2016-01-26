goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27188__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27189__i = 0, G__27189__a = new Array(arguments.length -  0);
while (G__27189__i < G__27189__a.length) {G__27189__a[G__27189__i] = arguments[G__27189__i + 0]; ++G__27189__i;}
  args = new cljs.core.IndexedSeq(G__27189__a,0);
} 
return G__27188__delegate.call(this,args);};
G__27188.cljs$lang$maxFixedArity = 0;
G__27188.cljs$lang$applyTo = (function (arglist__27190){
var args = cljs.core.seq(arglist__27190);
return G__27188__delegate(args);
});
G__27188.cljs$core$IFn$_invoke$arity$variadic = G__27188__delegate;
return G__27188;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27191__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27191 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27192__i = 0, G__27192__a = new Array(arguments.length -  0);
while (G__27192__i < G__27192__a.length) {G__27192__a[G__27192__i] = arguments[G__27192__i + 0]; ++G__27192__i;}
  args = new cljs.core.IndexedSeq(G__27192__a,0);
} 
return G__27191__delegate.call(this,args);};
G__27191.cljs$lang$maxFixedArity = 0;
G__27191.cljs$lang$applyTo = (function (arglist__27193){
var args = cljs.core.seq(arglist__27193);
return G__27191__delegate(args);
});
G__27191.cljs$core$IFn$_invoke$arity$variadic = G__27191__delegate;
return G__27191;
})()
;

return null;
});
