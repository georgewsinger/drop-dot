goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26434__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26435__i = 0, G__26435__a = new Array(arguments.length -  0);
while (G__26435__i < G__26435__a.length) {G__26435__a[G__26435__i] = arguments[G__26435__i + 0]; ++G__26435__i;}
  args = new cljs.core.IndexedSeq(G__26435__a,0);
} 
return G__26434__delegate.call(this,args);};
G__26434.cljs$lang$maxFixedArity = 0;
G__26434.cljs$lang$applyTo = (function (arglist__26436){
var args = cljs.core.seq(arglist__26436);
return G__26434__delegate(args);
});
G__26434.cljs$core$IFn$_invoke$arity$variadic = G__26434__delegate;
return G__26434;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26437__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26437 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26438__i = 0, G__26438__a = new Array(arguments.length -  0);
while (G__26438__i < G__26438__a.length) {G__26438__a[G__26438__i] = arguments[G__26438__i + 0]; ++G__26438__i;}
  args = new cljs.core.IndexedSeq(G__26438__a,0);
} 
return G__26437__delegate.call(this,args);};
G__26437.cljs$lang$maxFixedArity = 0;
G__26437.cljs$lang$applyTo = (function (arglist__26439){
var args = cljs.core.seq(arglist__26439);
return G__26437__delegate(args);
});
G__26437.cljs$core$IFn$_invoke$arity$variadic = G__26437__delegate;
return G__26437;
})()
;

return null;
});
