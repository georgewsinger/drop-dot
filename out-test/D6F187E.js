goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23265__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23266__i = 0, G__23266__a = new Array(arguments.length -  0);
while (G__23266__i < G__23266__a.length) {G__23266__a[G__23266__i] = arguments[G__23266__i + 0]; ++G__23266__i;}
  args = new cljs.core.IndexedSeq(G__23266__a,0);
} 
return G__23265__delegate.call(this,args);};
G__23265.cljs$lang$maxFixedArity = 0;
G__23265.cljs$lang$applyTo = (function (arglist__23267){
var args = cljs.core.seq(arglist__23267);
return G__23265__delegate(args);
});
G__23265.cljs$core$IFn$_invoke$arity$variadic = G__23265__delegate;
return G__23265;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23268__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23268 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23269__i = 0, G__23269__a = new Array(arguments.length -  0);
while (G__23269__i < G__23269__a.length) {G__23269__a[G__23269__i] = arguments[G__23269__i + 0]; ++G__23269__i;}
  args = new cljs.core.IndexedSeq(G__23269__a,0);
} 
return G__23268__delegate.call(this,args);};
G__23268.cljs$lang$maxFixedArity = 0;
G__23268.cljs$lang$applyTo = (function (arglist__23270){
var args = cljs.core.seq(arglist__23270);
return G__23268__delegate(args);
});
G__23268.cljs$core$IFn$_invoke$arity$variadic = G__23268__delegate;
return G__23268;
})()
;

return null;
});
