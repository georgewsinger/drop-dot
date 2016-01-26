goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41898__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41898 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41899__i = 0, G__41899__a = new Array(arguments.length -  0);
while (G__41899__i < G__41899__a.length) {G__41899__a[G__41899__i] = arguments[G__41899__i + 0]; ++G__41899__i;}
  args = new cljs.core.IndexedSeq(G__41899__a,0);
} 
return G__41898__delegate.call(this,args);};
G__41898.cljs$lang$maxFixedArity = 0;
G__41898.cljs$lang$applyTo = (function (arglist__41900){
var args = cljs.core.seq(arglist__41900);
return G__41898__delegate(args);
});
G__41898.cljs$core$IFn$_invoke$arity$variadic = G__41898__delegate;
return G__41898;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41901__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41901 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41902__i = 0, G__41902__a = new Array(arguments.length -  0);
while (G__41902__i < G__41902__a.length) {G__41902__a[G__41902__i] = arguments[G__41902__i + 0]; ++G__41902__i;}
  args = new cljs.core.IndexedSeq(G__41902__a,0);
} 
return G__41901__delegate.call(this,args);};
G__41901.cljs$lang$maxFixedArity = 0;
G__41901.cljs$lang$applyTo = (function (arglist__41903){
var args = cljs.core.seq(arglist__41903);
return G__41901__delegate(args);
});
G__41901.cljs$core$IFn$_invoke$arity$variadic = G__41901__delegate;
return G__41901;
})()
;

return null;
});
