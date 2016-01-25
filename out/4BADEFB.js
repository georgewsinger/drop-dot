goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__209218__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__209218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__209219__i = 0, G__209219__a = new Array(arguments.length -  0);
while (G__209219__i < G__209219__a.length) {G__209219__a[G__209219__i] = arguments[G__209219__i + 0]; ++G__209219__i;}
  args = new cljs.core.IndexedSeq(G__209219__a,0);
} 
return G__209218__delegate.call(this,args);};
G__209218.cljs$lang$maxFixedArity = 0;
G__209218.cljs$lang$applyTo = (function (arglist__209220){
var args = cljs.core.seq(arglist__209220);
return G__209218__delegate(args);
});
G__209218.cljs$core$IFn$_invoke$arity$variadic = G__209218__delegate;
return G__209218;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__209221__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__209221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__209222__i = 0, G__209222__a = new Array(arguments.length -  0);
while (G__209222__i < G__209222__a.length) {G__209222__a[G__209222__i] = arguments[G__209222__i + 0]; ++G__209222__i;}
  args = new cljs.core.IndexedSeq(G__209222__a,0);
} 
return G__209221__delegate.call(this,args);};
G__209221.cljs$lang$maxFixedArity = 0;
G__209221.cljs$lang$applyTo = (function (arglist__209223){
var args = cljs.core.seq(arglist__209223);
return G__209221__delegate(args);
});
G__209221.cljs$core$IFn$_invoke$arity$variadic = G__209221__delegate;
return G__209221;
})()
;

return null;
});
