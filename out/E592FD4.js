goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20863__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20864__i = 0, G__20864__a = new Array(arguments.length -  0);
while (G__20864__i < G__20864__a.length) {G__20864__a[G__20864__i] = arguments[G__20864__i + 0]; ++G__20864__i;}
  args = new cljs.core.IndexedSeq(G__20864__a,0);
} 
return G__20863__delegate.call(this,args);};
G__20863.cljs$lang$maxFixedArity = 0;
G__20863.cljs$lang$applyTo = (function (arglist__20865){
var args = cljs.core.seq(arglist__20865);
return G__20863__delegate(args);
});
G__20863.cljs$core$IFn$_invoke$arity$variadic = G__20863__delegate;
return G__20863;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20866__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20867__i = 0, G__20867__a = new Array(arguments.length -  0);
while (G__20867__i < G__20867__a.length) {G__20867__a[G__20867__i] = arguments[G__20867__i + 0]; ++G__20867__i;}
  args = new cljs.core.IndexedSeq(G__20867__a,0);
} 
return G__20866__delegate.call(this,args);};
G__20866.cljs$lang$maxFixedArity = 0;
G__20866.cljs$lang$applyTo = (function (arglist__20868){
var args = cljs.core.seq(arglist__20868);
return G__20866__delegate(args);
});
G__20866.cljs$core$IFn$_invoke$arity$variadic = G__20866__delegate;
return G__20866;
})()
;

return null;
});
