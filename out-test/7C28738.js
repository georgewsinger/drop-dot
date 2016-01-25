goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38263__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38263 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38264__i = 0, G__38264__a = new Array(arguments.length -  0);
while (G__38264__i < G__38264__a.length) {G__38264__a[G__38264__i] = arguments[G__38264__i + 0]; ++G__38264__i;}
  args = new cljs.core.IndexedSeq(G__38264__a,0);
} 
return G__38263__delegate.call(this,args);};
G__38263.cljs$lang$maxFixedArity = 0;
G__38263.cljs$lang$applyTo = (function (arglist__38265){
var args = cljs.core.seq(arglist__38265);
return G__38263__delegate(args);
});
G__38263.cljs$core$IFn$_invoke$arity$variadic = G__38263__delegate;
return G__38263;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38266__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38266 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38267__i = 0, G__38267__a = new Array(arguments.length -  0);
while (G__38267__i < G__38267__a.length) {G__38267__a[G__38267__i] = arguments[G__38267__i + 0]; ++G__38267__i;}
  args = new cljs.core.IndexedSeq(G__38267__a,0);
} 
return G__38266__delegate.call(this,args);};
G__38266.cljs$lang$maxFixedArity = 0;
G__38266.cljs$lang$applyTo = (function (arglist__38268){
var args = cljs.core.seq(arglist__38268);
return G__38266__delegate(args);
});
G__38266.cljs$core$IFn$_invoke$arity$variadic = G__38266__delegate;
return G__38266;
})()
;

return null;
});
