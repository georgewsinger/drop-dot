goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__52063__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__52063 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52064__i = 0, G__52064__a = new Array(arguments.length -  0);
while (G__52064__i < G__52064__a.length) {G__52064__a[G__52064__i] = arguments[G__52064__i + 0]; ++G__52064__i;}
  args = new cljs.core.IndexedSeq(G__52064__a,0);
} 
return G__52063__delegate.call(this,args);};
G__52063.cljs$lang$maxFixedArity = 0;
G__52063.cljs$lang$applyTo = (function (arglist__52065){
var args = cljs.core.seq(arglist__52065);
return G__52063__delegate(args);
});
G__52063.cljs$core$IFn$_invoke$arity$variadic = G__52063__delegate;
return G__52063;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__52066__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__52066 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52067__i = 0, G__52067__a = new Array(arguments.length -  0);
while (G__52067__i < G__52067__a.length) {G__52067__a[G__52067__i] = arguments[G__52067__i + 0]; ++G__52067__i;}
  args = new cljs.core.IndexedSeq(G__52067__a,0);
} 
return G__52066__delegate.call(this,args);};
G__52066.cljs$lang$maxFixedArity = 0;
G__52066.cljs$lang$applyTo = (function (arglist__52068){
var args = cljs.core.seq(arglist__52068);
return G__52066__delegate(args);
});
G__52066.cljs$core$IFn$_invoke$arity$variadic = G__52066__delegate;
return G__52066;
})()
;

return null;
});
