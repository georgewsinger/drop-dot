goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11865__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11866__i = 0, G__11866__a = new Array(arguments.length -  0);
while (G__11866__i < G__11866__a.length) {G__11866__a[G__11866__i] = arguments[G__11866__i + 0]; ++G__11866__i;}
  args = new cljs.core.IndexedSeq(G__11866__a,0);
} 
return G__11865__delegate.call(this,args);};
G__11865.cljs$lang$maxFixedArity = 0;
G__11865.cljs$lang$applyTo = (function (arglist__11867){
var args = cljs.core.seq(arglist__11867);
return G__11865__delegate(args);
});
G__11865.cljs$core$IFn$_invoke$arity$variadic = G__11865__delegate;
return G__11865;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11868__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11869__i = 0, G__11869__a = new Array(arguments.length -  0);
while (G__11869__i < G__11869__a.length) {G__11869__a[G__11869__i] = arguments[G__11869__i + 0]; ++G__11869__i;}
  args = new cljs.core.IndexedSeq(G__11869__a,0);
} 
return G__11868__delegate.call(this,args);};
G__11868.cljs$lang$maxFixedArity = 0;
G__11868.cljs$lang$applyTo = (function (arglist__11870){
var args = cljs.core.seq(arglist__11870);
return G__11868__delegate(args);
});
G__11868.cljs$core$IFn$_invoke$arity$variadic = G__11868__delegate;
return G__11868;
})()
;

return null;
});
