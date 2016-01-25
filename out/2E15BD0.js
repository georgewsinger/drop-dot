goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19010__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19010 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19011__i = 0, G__19011__a = new Array(arguments.length -  0);
while (G__19011__i < G__19011__a.length) {G__19011__a[G__19011__i] = arguments[G__19011__i + 0]; ++G__19011__i;}
  args = new cljs.core.IndexedSeq(G__19011__a,0);
} 
return G__19010__delegate.call(this,args);};
G__19010.cljs$lang$maxFixedArity = 0;
G__19010.cljs$lang$applyTo = (function (arglist__19012){
var args = cljs.core.seq(arglist__19012);
return G__19010__delegate(args);
});
G__19010.cljs$core$IFn$_invoke$arity$variadic = G__19010__delegate;
return G__19010;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19013__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19014__i = 0, G__19014__a = new Array(arguments.length -  0);
while (G__19014__i < G__19014__a.length) {G__19014__a[G__19014__i] = arguments[G__19014__i + 0]; ++G__19014__i;}
  args = new cljs.core.IndexedSeq(G__19014__a,0);
} 
return G__19013__delegate.call(this,args);};
G__19013.cljs$lang$maxFixedArity = 0;
G__19013.cljs$lang$applyTo = (function (arglist__19015){
var args = cljs.core.seq(arglist__19015);
return G__19013__delegate(args);
});
G__19013.cljs$core$IFn$_invoke$arity$variadic = G__19013__delegate;
return G__19013;
})()
;

return null;
});
