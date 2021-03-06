goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30550__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30551__i = 0, G__30551__a = new Array(arguments.length -  0);
while (G__30551__i < G__30551__a.length) {G__30551__a[G__30551__i] = arguments[G__30551__i + 0]; ++G__30551__i;}
  args = new cljs.core.IndexedSeq(G__30551__a,0);
} 
return G__30550__delegate.call(this,args);};
G__30550.cljs$lang$maxFixedArity = 0;
G__30550.cljs$lang$applyTo = (function (arglist__30552){
var args = cljs.core.seq(arglist__30552);
return G__30550__delegate(args);
});
G__30550.cljs$core$IFn$_invoke$arity$variadic = G__30550__delegate;
return G__30550;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30553__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30553 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30554__i = 0, G__30554__a = new Array(arguments.length -  0);
while (G__30554__i < G__30554__a.length) {G__30554__a[G__30554__i] = arguments[G__30554__i + 0]; ++G__30554__i;}
  args = new cljs.core.IndexedSeq(G__30554__a,0);
} 
return G__30553__delegate.call(this,args);};
G__30553.cljs$lang$maxFixedArity = 0;
G__30553.cljs$lang$applyTo = (function (arglist__30555){
var args = cljs.core.seq(arglist__30555);
return G__30553__delegate(args);
});
G__30553.cljs$core$IFn$_invoke$arity$variadic = G__30553__delegate;
return G__30553;
})()
;

return null;
});
