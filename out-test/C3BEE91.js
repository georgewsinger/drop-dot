goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15266__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15266 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15267__i = 0, G__15267__a = new Array(arguments.length -  0);
while (G__15267__i < G__15267__a.length) {G__15267__a[G__15267__i] = arguments[G__15267__i + 0]; ++G__15267__i;}
  args = new cljs.core.IndexedSeq(G__15267__a,0);
} 
return G__15266__delegate.call(this,args);};
G__15266.cljs$lang$maxFixedArity = 0;
G__15266.cljs$lang$applyTo = (function (arglist__15268){
var args = cljs.core.seq(arglist__15268);
return G__15266__delegate(args);
});
G__15266.cljs$core$IFn$_invoke$arity$variadic = G__15266__delegate;
return G__15266;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15269__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15269 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15270__i = 0, G__15270__a = new Array(arguments.length -  0);
while (G__15270__i < G__15270__a.length) {G__15270__a[G__15270__i] = arguments[G__15270__i + 0]; ++G__15270__i;}
  args = new cljs.core.IndexedSeq(G__15270__a,0);
} 
return G__15269__delegate.call(this,args);};
G__15269.cljs$lang$maxFixedArity = 0;
G__15269.cljs$lang$applyTo = (function (arglist__15271){
var args = cljs.core.seq(arglist__15271);
return G__15269__delegate(args);
});
G__15269.cljs$core$IFn$_invoke$arity$variadic = G__15269__delegate;
return G__15269;
})()
;

return null;
});
