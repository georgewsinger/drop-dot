goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15112__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15113__i = 0, G__15113__a = new Array(arguments.length -  0);
while (G__15113__i < G__15113__a.length) {G__15113__a[G__15113__i] = arguments[G__15113__i + 0]; ++G__15113__i;}
  args = new cljs.core.IndexedSeq(G__15113__a,0);
} 
return G__15112__delegate.call(this,args);};
G__15112.cljs$lang$maxFixedArity = 0;
G__15112.cljs$lang$applyTo = (function (arglist__15114){
var args = cljs.core.seq(arglist__15114);
return G__15112__delegate(args);
});
G__15112.cljs$core$IFn$_invoke$arity$variadic = G__15112__delegate;
return G__15112;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15115__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15116__i = 0, G__15116__a = new Array(arguments.length -  0);
while (G__15116__i < G__15116__a.length) {G__15116__a[G__15116__i] = arguments[G__15116__i + 0]; ++G__15116__i;}
  args = new cljs.core.IndexedSeq(G__15116__a,0);
} 
return G__15115__delegate.call(this,args);};
G__15115.cljs$lang$maxFixedArity = 0;
G__15115.cljs$lang$applyTo = (function (arglist__15117){
var args = cljs.core.seq(arglist__15117);
return G__15115__delegate(args);
});
G__15115.cljs$core$IFn$_invoke$arity$variadic = G__15115__delegate;
return G__15115;
})()
;

return null;
});
