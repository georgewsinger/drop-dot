// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__52678__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__52678 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52679__i = 0, G__52679__a = new Array(arguments.length -  0);
while (G__52679__i < G__52679__a.length) {G__52679__a[G__52679__i] = arguments[G__52679__i + 0]; ++G__52679__i;}
  args = new cljs.core.IndexedSeq(G__52679__a,0);
} 
return G__52678__delegate.call(this,args);};
G__52678.cljs$lang$maxFixedArity = 0;
G__52678.cljs$lang$applyTo = (function (arglist__52680){
var args = cljs.core.seq(arglist__52680);
return G__52678__delegate(args);
});
G__52678.cljs$core$IFn$_invoke$arity$variadic = G__52678__delegate;
return G__52678;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__52681__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__52681 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52682__i = 0, G__52682__a = new Array(arguments.length -  0);
while (G__52682__i < G__52682__a.length) {G__52682__a[G__52682__i] = arguments[G__52682__i + 0]; ++G__52682__i;}
  args = new cljs.core.IndexedSeq(G__52682__a,0);
} 
return G__52681__delegate.call(this,args);};
G__52681.cljs$lang$maxFixedArity = 0;
G__52681.cljs$lang$applyTo = (function (arglist__52683){
var args = cljs.core.seq(arglist__52683);
return G__52681__delegate(args);
});
G__52681.cljs$core$IFn$_invoke$arity$variadic = G__52681__delegate;
return G__52681;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map